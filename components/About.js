import React, { useMemo } from "react";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";

const ABOUT_US_TEXT = "We are a team of qualified and experienced computer professionals dedicated to providing fast and reliable IT support services and solutions to small to medium size businesses in Sydney. We established Active IT to offer a cost-effective and comprehensive set of IT support solutions. Our goal is to build and maintain quality relationships with our clients. \
We have been helping businesses since 2008, providing IT support such as technical helpdesk support, full network monitoring and maintenance, and IT consulting services. It has always been our goal to provide enterprise-level IT solutions to the small and medium business sectors with small business prices. Our experience has allowed us to build and develop the infrastructure needed to keep our prices affordable and our clients up and running. \
We partner with many types of businesses in the area and strive to eliminate IT issues before they cause expensive downtime, so you can continue to drive your business forward.\
By outsourcing the management, maintenance, and support of your business IT to us, you can take the stress out of using the technology your business counts on everyday. With a customized IT solution from our team of experts, you will begin to think of your technology as a strategic investment, rather than a constant drain on your time and resources.\
As your company’s virtual IT department we will be managing, maintaining and monitoring your entire network system to ensure it remains in the most stable & reliable condition at all times, backed up by our Guaranteed response time service level agreement."

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
            <p className="mt-5 text-center">“{ABOUT_US_TEXT}”.</p>
          </div>
        </motion.p>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default About;
