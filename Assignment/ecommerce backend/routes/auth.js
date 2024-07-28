const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { User } = require('../models/User');

const router = express.Router();

// Set up email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'shainy0107vs@gmail.com' ,
        pass: 'jvnu iiwt fhmx zeom'
    }
});

// User registration route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const newUser = await User.create({
            email,
            password: hashedPassword,
            verificationToken
        });

        const verificationUrl = `http://localhost:5000/auth/verify-email?token=${verificationToken}`;
        const mailOptions = {
            from:'shainy0107vs@gmail.com',
            to: 'angelin0107vs@gmail.com', // Use the email provided by the user
            subject: 'Email Verification',
            html: `Please verify your email by clicking <a href="${verificationUrl}">here</a>.`
        };

        await transporter.sendMail(mailOptions);
        res.status(201).json({ message: 'User registered. Please check your email for verification.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Email verification route
router.get('/verify-email', async (req, res) => {
    const { token } = req.query;

    try {
        const user = await User.findOne({ where: { verificationToken: token } });
        if (!user) return res.status(400).json({ error: 'Invalid token' });

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        if (!user.isVerified) return res.status(400).json({ error: 'Email not verified' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
