import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Location from "../../public/assets/Icon/location.svg";
import Mail from "../../public/assets/Icon/email.svg";
import Phone from "../../public/assets/Icon/phone.svg";

import { SERVICES } from "../../constants/services";

const Footer = () => {
  return (
    <div className="pt-12 pb-24 bg-white-300">
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 mx-auto sm:px-6 lg:px-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:grid-flow-row">
        <div className="flex flex-col items-start mb-8 sm:mb-4">
          <p className="mb-4">
            <strong className="font-medium text-orange-500">Bright IT Hub</strong> is your Trusted IT Partner, Simplifying Technology for Business Growth.
          </p>
          
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <a href="https://www.facebook.com/profile.php?id=61571207402732&sk=about" target="_blank">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <a href="https://www.instagram.com/bright_it_hub" target="_blank">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Bright IT Hub</p>
        </div>
        
        <div className="flex flex-col mb-8 sm:mb-4 sm:pb-4">
          <p className="mb-4 text-lg font-medium text-black-600">Services</p>
          <ul className="text-black-500 ">
            {SERVICES.map(service => (
              <li key={service.name} className="my-2 transition-all cursor-pointer hover:text-orange-500">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col sm:pb-4">
          <ul className="text-black-500">
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              <a className="flex" href="https://maps.app.goo.gl/JVnBVAAS4hprpXA96" target="_blank"><Location className="w-6 h-6 mr-2" /> Suit- 420, Church Street, Parramatta</a>
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              <a className="flex"><Mail className="w-6 h-6 mr-2" href="mailto:support@brightithub.com"/> support@brightithub.com</a>

            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              <a className="flex"><Phone className="w-6 h-6 mr-2" href="tel:0000 420 420"/> 0000 420 420</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
