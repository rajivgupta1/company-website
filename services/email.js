import { send, init } from 'emailjs-com';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export const sendEmail = async (content) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error("Missing environment variables!");
    return { success: false, message: "Missing environment variables!" };
  }

  init(PUBLIC_KEY); // Initialize EmailJS

  const toSend = {
    name: content.name,
    email: content.email,
    phone: content.phone,
    message: content.message,
  };

  try {
    const res = await send(SERVICE_ID, TEMPLATE_ID, toSend);

    if (res.status === 200) {
      // Success: Return success message
      return { success: true, message: "Thank you for contacting us, we will get back to you soon." };
    } else {
      // If status is not 200, return a generic error message
      return { success: false, message: "Failed to send your message. Please try again." };
    }
  } catch (err) {
    console.error("Error sending email:", err);
    // Return error message
    return { success: false, message: "Error occurred while sending email. Please try again." };
  }
};
