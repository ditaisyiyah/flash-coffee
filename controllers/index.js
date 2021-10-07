const {
  Recipe,
  User,
  Step,
  StepsIngredient,
  Ingredient,
  RecipeCategory,
  RecipeCategoriesRecipe,
  IngredientCategoriesIngredient,
} = require('../models');
const sequelize = require('sequelize');

class Controller {
  static async recipesByAuthor(req, res, next) {
    try {
      const { authorId } = req.params;
      const recipes = await Recipe.findAll({
        attributes: [
          'id',
          'name',
          'description',
          [sequelize.col('User.name'), 'author'],
          [
            sequelize.literal(
              '(SELECT SUM(timer) FROM "Steps" WHERE recipe_id = "Recipe".id)'
            ),
            'totalTimes',
          ],
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM "Steps" WHERE recipe_id = "Recipe".id)'
            ),
            'totalSteps',
          ],
        ],
        include: [
          {
            attributes: [],
            model: User,
            where: { id: authorId },
          },
        ],
      });
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }

  static async recipes(req, res, next) {
    try {
      const recipes = await Recipe.findAll({
        attributes: [
          'id',
          'name',
          [
            sequelize.literal(
              `(SELECT COUNT( DISTINCT (ingredient_id)) FROM "StepsIngredients" WHERE recipe_id = "Recipe".id) `
            ),
            'totalIngredients',
          ],
        ],
      });
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }

  static async recipesByCategories(req, res, next) {
    try {
      const { categoryId } = req.query;
      const recipes = await Recipe.findAll({
        attributes: [
          'name',
          [sequelize.col('RecipeCategories.name'), 'isAmericanFood'],
          [sequelize.col('RecipeCategories.name'), 'isChineseFood'],
          sequelize.literal(
            `CASE WHEN "RecipeCategories".name = 'American Food' THEN 'Yes' ELSE 'No' END "isAmericanFood"`
          ),
          sequelize.literal(
            `CASE WHEN "RecipeCategories".name = 'Chinese Food' THEN 'Yes' ELSE 'No' END "isChineseFood"`
          ),
        ],
        include: [
          {
            through: {
              attributes: [],
            },
            attributes: [],
            model: RecipeCategory,
            where: {
              [sequelize.Op.or]: [{ id: categoryId[0] }, { id: categoryId[1] }],
            },
          },
        ],
      });
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }

  static async recipesByDuration(req, res, next) {
    try {
      const { duration } = req.params;
      const recipes = await Recipe.findAll({
        attributes: [
          'name',
          [
            sequelize.literal(
              `(SELECT SUM(timer) FROM "Steps" WHERE recipe_id = "Recipe".id HAVING SUM(timer)<=${duration})`
            ),
            'totalTime',
          ],
        ],
      });

      res
        .status(200)
        .json(recipes.filter((el) => el.dataValues.totalTime !== null));
    } catch (error) {
      next(error);
    }
  }

  static async addRecipe(req, res, next) {
    try {
      const { name, description, author_id, category_id } = req.body;
      const recipe = await Recipe.create({ name, description, author_id });
      await RecipeCategoriesRecipe.create({
        recipe_id: recipe.id,
        recipe_category_id: category_id,
      });
      res.status(201).json({ message: 'Successfully add a new recipe' });
    } catch (error) {
      next(error);
    }
  }
  static async addIngredient(req, res, next) {
    try {
      const { name, color, category_id } = req.body;
      const ingredient = await Ingredient.create({ name, color });
      await IngredientCategoriesIngredient.create({
        ingredient_id: ingredient.id,
        ingredient_category_id: category_id,
      });
      res.status(201).json({ message: 'Successfully add a new ingredient' });
    } catch (error) {
      next(error);
    }
  }
  static async addStep(req, res, next) {
    // add new step for recipe(1 step)
    try {
      const { recipe_id, step_number, timer, description, ingredient_ids } =
        req.body;
      const step = await Step.create({
        recipe_id,
        step_number,
        timer,
        description,
      });
      const ingredients = ingredient_ids.map((el) => {
        return { recipe_id, ingredient_id: el, step_id: step.id };
      });
      await StepsIngredient.bulkCreate(ingredients);
      res.status(201).json(step);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
