import { send, init } from "emailjs-com";

const serviceId = process.env.SERVICE_ID;
const templateId = process.env.TEMPLATE_ID;
const userID = process.env.PUBLIC_KEY;

export const sendEmail = (content) => {
  init(userID);
  const toSend = {
    name: content.name,
    email: content.email,
    phone: content.phone,
    message: content.message,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};