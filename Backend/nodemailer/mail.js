const nodemailer = require('nodemailer');



const sendVerificationEmail = async(code,to) => {
    // const testAccount = await nodemailer.createTestAccount();
    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nityfool981@gmail.com',
          pass: 'ooaf pfhk fuzs qchd'
      },
      tls: {
        rejectUnauthorized: false
      }
  
  });
   console.log("to",to);
  let mailOptions = {
    from: 'nityfool981@gmail.com', // sender address
    to: to, // list of receivers
    subject: "Email Verification Code ✔", // Subject line
    text: code, // plain text body
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  return info;

};



const sendWelcomeEmail = async(to,username) => {
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nityfool981@gmail.com',
            pass: 'ooaf pfhk fuzs qchd'
        },
        tls: {
          rejectUnauthorized: false
        }
    
    });
     console.log("to",to);
    let mailOptions = {
      from: 'nityfool981@gmail.com', // sender address
      to: to, // list of receivers
      subject: "Welcome Email", // Subject line
      text: `Welcome ${username} to our platform happy shoping`, // plain text body
    };
  
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
}


module.exports = {sendVerificationEmail,sendWelcomeEmail} 