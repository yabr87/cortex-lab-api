const nodemailer = require('nodemailer');
const { EMAIL, PASS, SMTP, TO_EMAIL } = process.env;

async function sendEmail(body) {
  const { name, email, phone, message } = body;

  console.log(
    '=========================================================>',
    body
  );

  const html = `
<h1>NEW CUSTOMER REQUEST</h1>
<p><strong>Customer name:</strong> ${name}</p>
${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}

`;

  const transporter = nodemailer.createTransport({
    host: SMTP,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  await transporter.sendMail({
    from: EMAIL,
    to: TO_EMAIL,
    subject: `NEW REQUEST FROM CLIENT ${name.toUpperCase()}`,
    html: html,
  });
}

module.exports = sendEmail;
