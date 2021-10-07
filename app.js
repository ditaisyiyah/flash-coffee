const express = require('express');
const router = require('./routes');

const app = express();
const PORT = 3000; // THIS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use((err, req, res) => {
  res.status(404).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
