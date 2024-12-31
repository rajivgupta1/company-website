import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import { SERVICES } from "../../constants/services";

const Footer = () => {
  return (
    <div className="pt-12 pb-24 bg-white-300">
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 mx-auto sm:px-6 lg:px-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:grid-flow-row">
        <div className="flex flex-col items-start mb-8 sm:mb-4">
          <p className="mb-4">
            <strong className="font-medium">Bright IT Hub</strong> is a private
            virtual network that has unique features and has high security.
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
          <p className="mb-4 text-lg font-medium text-black-600">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              FAQ
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Tutorials
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              About Us
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Privacy Policy
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
