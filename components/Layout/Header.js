import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { MENU_ITEMS } from "../../constants/menuItems";
import Image from "next/image";
import LOGOIMAGE from '../../public/assets/bright_it_hub_logo.png'

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="grid max-w-screen-xl grid-flow-col px-6 py-3 mx-auto sm:px-8 lg:px-16 sm:py-4">
          <div className="flex items-center col-start-1 col-end-2 font-bold text-orange-500">
            <Image src={LOGOIMAGE} width={100} height={20} />
          </div>
          
          <ul className="items-center hidden col-start-4 col-end-8 lg:flex text-black-500">
            {MENU_ITEMS.map(menu_item => 
              <LinkScroll
                key={menu_item.name}
                activeClass="active"
                to={menu_item.name}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-80}
                onSetActive={() => {
                  setActiveLink(menu_item.name);
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === menu_item.name
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 a")
                }
              >
                {(menu_item.label)}
              </LinkScroll>
            )}
          </ul>
          
          <div className="flex items-center justify-end col-start-10 col-end-12 font-large">
            <LinkScroll
              activeClass="active"
              to="getQuote"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
              onSetActive={() => {}}
              className="px-5 py-2 font-medium tracking-wide text-orange-500 capitalize transition-all border border-orange-500 rounded-l-full rounded-r-full outline-none cursor-pointer sm:px-8 bg-white-500 hover:bg-orange-500 hover:text-white-500 hover:shadow-orange"
            >
              Contact Us
            </LinkScroll>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed bottom-0 left-0 right-0 z-20 px-4 lg:hidden sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex items-center justify-between w-full text-black-500">
            {MENU_ITEMS.map(menu_item => (
              <LinkScroll
                key={menu_item.name}
                activeClass="active"
                to={menu_item.name}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-80}
                onSetActive={() => {
                  setActiveLink(menu_item.name);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === menu_item.name
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"   
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={menu_item.svg_d}
                  >
                  </path>
                </svg>
                  {menu_item.label}
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
