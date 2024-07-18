
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({    
    service: 'Gmail', 
    auth: {
      user: 'shainy0107vs@gmail.com', 
      pass: 'jajh kujs amxi dcwj',
    },
  });

  
  let mailOptions = {
    from: 'shainy0107vs@gmail.com', 
    to: 'angelin0107vs@gmail.com', 
    subject: 'nodemailer', 
    text: 'nodemailer is used to send emails',
  };

  try {
    
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
