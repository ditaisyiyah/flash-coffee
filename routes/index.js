const Controller = require('../controllers');

const router = require('express').Router();

router.get('/recipes/authors/:authorId', Controller.recipesByAuthor);
router.get('/recipes', Controller.recipes);
router.get('/recipes/categories', Controller.recipesByCategories);
router.get('/recipes/:duration', Controller.recipesByDuration);

router.post('/recipes', Controller.addRecipe);

router.post('/ingredients', Controller.addIngredient);

router.post('/steps', Controller.addStep);

module.exports = router;
