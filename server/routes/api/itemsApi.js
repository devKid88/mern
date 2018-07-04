const express = require('express');
const router = express.Router();

// Use model
const ItemModel = require('../../models/ItemModel');

// GET ALL api/items
router.get('/', (req, res) => {
    ItemModel.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// POST api/items
router.post('/', (req, res) => {
    const newItem = new ItemModel({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// DELETE api/items/id
router.delete('/:id', (req, res) => {
    ItemModel.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: true}));
});

module.exports = router;