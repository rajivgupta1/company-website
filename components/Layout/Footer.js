import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import { SERVICES } from "../../constants/services";

const Footer = () => {
  return (
    <div className="pt-12 pb-24 bg-white-300">
      <div className="grid w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-4 mx-auto sm:px-6 lg:px-16 sm:grid-rows-1 sm:grid-flow-col sm:grid-cols-12">
        <div className="flex flex-col items-start col-start-1 col-end-5 row-span-2">
          <p className="mb-4">
            <strong className="font-medium">Bright IT Hub</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <Facebook className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <Twitter className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center p-2 mx-2 rounded-full shadow-md bg-white-500">
              <Instagram className="w-6 h-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Bright IT Hub</p>
        </div>
        
        <div className="flex flex-col col-start-5 col-end-9 row-span-2">
          <p className="mb-4 text-lg font-medium text-black-600">Services</p>
          <ul className="text-black-500 ">
            {SERVICES.map(service => (
              <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col col-start-9 col-end-12 row-span-2">
          <p className="mb-4 text-lg font-medium text-black-600">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              FAQ{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Tutorials{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              About Us{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Privacy Policy{" "}
            </li>
            <li className="my-2 transition-all cursor-pointer hover:text-orange-500">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
