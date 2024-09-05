import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    service: "yahoo",
    secure: true,
    auth: {
      user: process.env.YAHOO_EMAIL,
      pass: process.env.YAHOO_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.YAHOO_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "New Support Message from POSA",
    text: `
      Name: ${body.firstName} ${body.lastName}
      Email: ${body.email}
      Message: ${body.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
});
