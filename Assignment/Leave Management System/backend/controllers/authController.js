const  db  = require('../models'); 
const User = db.User; 
const dbleave = db.LeaveRequest;
const bcrypt = require('bcrypt');
const { raw } = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const {email, username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role,email });
    res.status(201).json(user);
  } catch (error) {
    console.log("error:  " , error.message);
    res.status(400).json({ error: error.message });
  }};

exports.login = async (req, res) => { 
  const { username, password } = req.body;
  try {
    console.log('Login attempt:', { username });
    const user = await User.findOne({ 
      where: { username } ,
    attributes:['username','role','password',],
    raw:true
  });
  console.log("user", user);
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log('Password mismatch');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const jwtSecretKey = process.env.JWT_SECRET;
    const token = jwt.sign({ username: user.username, role: user.role }, jwtSecretKey, { expiresIn: '1h' });
    console.log('Login successful:', user);
    console.log(token)
    return res.json({ success: true, user: { username: user.username, role: user.role },
    token
    });
  } catch (error) {
    console.error('Login error:', error); 
    res.status(500).json({ success: false, message: 'Internal server error' });
  }};

exports.getLeaveBalance = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { role: 'employee' }, 
    });
    const balances = await Promise.all(users.map(async (user) => {
      const leaveRequests = await dbleave.findAll({ where: { username: user.username } });
      const leaveTaken = leaveRequests.length;
      const leaveBalance = 12 - leaveTaken; 
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        balance: leaveBalance,
        taken: leaveTaken,
      };
    }));
    res.json(balances);
  } catch (error) {
    console.error('Error fetching leave balances:', error);
    res.status(500).json({ error: 'Failed to fetch leave balances' });
  }};



