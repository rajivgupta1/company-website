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
    name: content.name,
    email: content.email,
    phone: content.phone,
    message: content.message,
  };

  send(SERVICE_ID, TEMPLATE_ID, toSend)
    .then((res) => {
      alert("Thank you for contacting us, we will get back you soon.")
    })
    .catch((err) => {
      console.error("Error sending email:", err);
    });
};
