import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { FEATURES } from "../constants/features";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl px-6 mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
      id="feature"
    >
      <div className="grid grid-flow-row grid-cols-1 gap-8 my-12 sm:grid-flow-col sm:grid-cols-2 p y-8">
        <ScrollAnimationWrapper className="flex justify-end w-full">
          <motion.div className="w-full h-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={350}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center w-full ml-auto lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl font-medium leading-relaxed lg:text-4xl text-black-600">
            WHY CHOOSE BRIGHT IT HUB
          </h3>
          
          <ul className="self-start mt-8 ml-8 list-inside text-black-500">
            {FEATURES.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
