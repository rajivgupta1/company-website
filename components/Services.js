import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { SERVICES } from "../constants/services";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="w-full bg-gradient-to-b from-white-300 to-white-500 py-14"
      id="services"
    >
      <div className="flex flex-col justify-center w-full max-w-screen-xl px-6 mx-auto text-center sm:px-8 lg:px-16">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-black-600"
            >
              Explore Our Services
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="w-10/12 mx-auto my-2 italic leading-normal text-center sm:w-7/12 lg:w-6/12"
            >
              Crafting Tomorrow, Today
            </motion.p>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-flow-row grid-cols-1 gap-4 px-6 py-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 lg:py-12 sm:px-0 lg:px-6">
            {SERVICES.map(service => (
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col items-center justify-center p-2 border-2 border-gray-500 rounded-xl"
                  whileHover={{
                    scale : 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                >
                  <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                    {service.name}
                  </p>

                  <p className="italic leading-normal text-center">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-col justify-center flex-none mt-12 mb-8">
                    <ButtonOutline>Get Quote</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
            
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="w-9/12 mx-auto text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-black-600 sm:w-6/12 lg:w-4/12">
              Huge Global Network of Fast VPN{" "}
            </motion.h3>
            <motion.p className="w-10/12 mx-auto my-2 leading-normal sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full px-8 py-12 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-wrap items-center w-full mt-4 justify-evenly lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="w-auto h-18" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="w-auto mt-4 h-14 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="w-auto mt-2 h-14 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="w-auto h-12 mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="w-auto mt-2 h-14 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="w-auto h-12 mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="w-9/12 mx-auto text-2xl font-medium leading-normal sm:text-3xl lg:text-4xl text-black-600 sm: lg:w-4/12">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="w-10/12 mx-auto mt-4 mb-2 leading-normal sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex flex-col w-full py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute z-10 flex flex-col items-center justify-between w-full px-6 py-8 rounded-xl sm:py-14 sm:px-12 lg:px-16 sm:flex-row bg-white-500">
                <div className="flex flex-col w-10/12 mb-6 text-left sm:w-7/12 lg:w-5/12 sm:mb-0">
                  <h5 className="text-xl font-medium leading-relaxed text-black-600 sm:text-2xl lg:text-3xl">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute top-0 left-0 right-0 w-11/12 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg h-60 sm:h-56"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;
