import { send, init } from 'emailjs-com';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export const sendEmail = (content) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("Missing environment variables!");
    return;
  }

  init(PUBLIC_KEY); // Initialize EmailJS

  const toSend = {
    user_name: content.name,
    user_email: content.email,
    user_phone: content.phone,
    user_message: content.message,
  };

  console.log("Preparing to send email");

  send(SERVICE_ID, TEMPLATE_ID, toSend)
    .then((res) => {
      console.log("Email sent successfully!", res);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
    });
};
