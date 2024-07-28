const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
  });

db.sync()
  .then(async () => {
    console.log('Database synced');
    // Insert a test user directly
    try {
        const newUser = await db.User.bulkCreate([
            {
              first_name: "Arthi",
              email: "arthi@gmail.com",
              age: 22,
              gender: "Female"
            },
            {
              first_name: "Raj",
              last_name: "Kumar",
              email: "kumar@gmail.com",
              age: 22,
              gender: "Male"
            },
            {
              first_name: "Priya", 
              email: "priya@gmail.com",
              age: 22,
              gender: "Female"
            },
            {
              first_name: "Gautham",  
              email: "gautham@gmail.com",
              age: 22,
              gender: "Male"
            }
          ]);
          
      console.log('New user created:', newUser);
    } catch (error) {
      console.error('Failed to create new user:', error);
    }
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });

app.get('/', async (req, res) => {
  try {
    const studentData = await db.User.findAll();
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/student_data', async (req, res) => {
  const { first_name, last_name, email, age, gender, } = req.body;
  try {
    const newUser = await db.User.create({
      first_name,
      last_name,
      email,
      age,
      gender,
     
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/student_data/:id', async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, age, gender } = req.body;
    
    try {
      const user = await db.User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      const updatedUser = await user.update({
        first_name,
        last_name,
        email,
        age,
        gender
      });
      
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
app.delete('/data/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      const user = await db.User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      await user.destroy();
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});