const express = require('express');
const cors = require('cors');
const  db = require('./models/index');
const User = require('./models/User');
const Product = require('./models/Product');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
require('dotenv').config();

const dbPath = db.sequelize

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
// app.use('/User', User);
// app.use('/Product', Product);

dbPath.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
  });

  dbPath.sync()
  .then(async () => {
    console.log('Database synced');
    // Insert a test user directl  
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });

// Start server
// app.listen(port, async () => {
//   console.log(`Server is running on port ${port}`);

//   // Initialize Sequelize
//   const sequelize = new Sequelize({
//     username: 'postgres',
//     password: 'shainy',
//     database: 'ECOMMERCE',
//     host: 'localhost',
//     dialect: 'postgres',
//   });

//   try {
//     await sequelize.authenticate();
//     console.log('Database connected');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// });
