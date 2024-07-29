const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'angelin0107vs@gmail.com', 
      pass: 'abcd abcd abcd abcd', 
    },
  });

  let mailOptions = {
    from: 'angelin0107vs@gmail.com', 
    to, 
    subject, 
    text, 
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error); 
      }
      resolve(info); 
    });
  });
}

module.exports = sendEmail;
