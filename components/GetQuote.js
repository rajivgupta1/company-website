import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const GetQuote = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl px-6 mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 sm:px-8 lg:px-16"
      id="getQuote"
    >
      <div className="grid grid-flow-row grid-cols-1 gap-8 my-12 sm:grid-flow-col sm:grid-cols-2 p y-8">
        <ScrollAnimationWrapper className="flex justify-end w-full">
          <motion.div className="w-full h-full p-4" variants={scrollAnimation}>
            <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
            <p class="text-sm mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

            <div class="mt-4">
                <h2 class="text-black-600 text-base font-bold">Email</h2>
                <ul class="mt-4">
                    <li class="flex items-center">
                        <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    data-original="#000000" />
                            </svg>
                        </div>
                        <a href="mailto:support@brightithub.com" class="text-[#007bff] text-sm ml-4">
                            <small class="block">Mail</small>
                            <strong>support@brightithub.com</strong>
                        </a>
                    </li>
                </ul>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col items-end justify-center w-full ml-auto lg:w-9/12" variants={scrollAnimation}>
          <form class="ml-auto space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <input type='tel' placeholder='Phone'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" />
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
              
              <ButtonPrimary addClass="float-right">Send</ButtonPrimary>
            </form>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default GetQuote;
