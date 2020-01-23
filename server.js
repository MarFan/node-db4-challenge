const express = require('express');

const RecipeRouter = require('./api/recipes/recipe-router');
const IngredientsRouter = require('./api/ingredients/ingredients-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientsRouter);

module.exports = server;