import React, { useMemo, useState } from "react";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { SERVICES } from "../constants/services";
import useModal from "../hooks/useModal";
import ModalDialog from "./misc/ModalDialog";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const { isOpen, openModal, closeModal } = useModal()

  // Service title
  const [serviceTitle, setServiceTitle] = useState("")

  // Service Descriptions
  const [serviceDescription, setServiceDescription] = useState("")

  // Open Modal
  const handleOnClick = (title, description) => {
    setServiceTitle(title)
    setServiceDescription(description)
    openModal()
  }
  
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
          
          <div className="grid grid-flow-row grid-cols-1 gap-6 px-6 py-8 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12 lg:py-12 sm:px-0 lg:px-6">
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

                  <a 
                    className="text-orange-500" 
                    role="button" 
                    onClick={() => handleOnClick(service.name, service.description)}
                  >
                    Read More...
                  </a>
                  
                  <div className="flex flex-row justify-center gap-2 mt-12 mb-8">
                    <ButtonOutline>Get Quote</ButtonOutline>
                  </div>
                </motion.div>

                {/* Modal */}
                <ModalDialog 
                  isOpen={isOpen} 
                  closeModal={closeModal} 
                  bodyText={serviceDescription}
                  titleText={serviceTitle}
                />
              </ScrollAnimationWrapper>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
