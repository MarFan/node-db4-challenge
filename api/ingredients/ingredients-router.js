const express = require('express');

const Ingredients = require('./ingredients-model')

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    Ingredients.list(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Nothing seems to be working!' });
    })
})

module.exports = router;