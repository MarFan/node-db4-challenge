const express = require('express');

const Recipes = require('./recipe-model')

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({ error: "Can't seem to find any recipes. You're going to starve."}))
})

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json({ error: "Can't seem to find any items to add to a shopping list."}))
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(inst => res.status(200).json(inst))
    .catch(err => {console.log(err); res.status(500).json({ error: "Looks like you are on your own. There are no instructions!" })})
})

module.exports = router;