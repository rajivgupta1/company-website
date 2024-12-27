import React, { useMemo } from "react";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";
import { ABOUT_US } from "../constants/about_us";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="flex items-stretch px-3 mt-24" id="about">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl font-medium leading-relaxed text-center sm:text-3xl lg:text-4xl text-black-600"
        >
          WHO ARE WE?
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="mx-auto my-2 italic leading-normal text-center"
        >
          <div className="flex flex-col p-8 transition-all border-2 border-gray-500 rounded-lg hover:border-orange-500">
            <p className="mt-5 text-center">“{ABOUT_US}”.</p>
          </div>
        </motion.p>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default About;
