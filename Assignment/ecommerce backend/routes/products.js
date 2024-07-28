const express = require('express');
const product = require('../models/Product')
const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
  const { productId,productName, price, productImage } = req.body;

  try {
    const newProduct = await product.create({productId, productName, price, productImage });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { productName, price, productImage } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    product.productName = productName || product.productName;
    product.price = price || product.price;
    product.productImage = productImage || product.productImage;

    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    await product.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
