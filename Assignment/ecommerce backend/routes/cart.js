const express = require('express');
const cart = require('../models/Cart')

const router = express.Router();

// Add item to cart
router.post('/', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const cartItem = await cart.create({ userId, productId, quantity });
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all cart items for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const cartItems = await Cart.findAll({ where: { userId } });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
