import React from "react";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";

const First = () => {
  return (
    <motion.div
      className={`font-[Helvetica] w-[100%] min-h-[90vh] flex justify-center mt-10`}
    >
      <div className="w-[80%] flex flex-col xl:flex-row items-center ">
        <motion.div
          className="md:w-[60%]"
          initial={{ x: -100, y: -100 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, y: 0, transition: { duration: 1 } }}
        >
          <Image
            src="/undraw_showing_support_re_5f2v.svg"
            alt="FSU"
            height={800}
            width={800}
            className=""
            priority
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-[90%] md:w-[80%] mt-10 h-max"
          initial={{ x: 100, y: -100 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, y: 0, transition: { duration: 1 } }}
        >
          {/* bg-gradient-to-r from-[#48408d] to-[#108cf1dc] */}
          <span className="text-[#F0885E] text-lg font-sans font-semibold mb-2 text-justify ">
            Empowering students. Advocating for change. Creating a better
            future.
          </span>
          <h1 className="text-[1.5rem] md:text-[3rem] uppercase font-extrabold text-[#494848] rounded w-max py-3 font-[Montserrat] leading-3 ">
            Free Student Union
          </h1>
          <p className="uppercase text-base md:text-xl text-[#777676] mb-5 mt-2 font-[Poppins]">
            ioe purwanchal campus
          </p>
          {/* <hr className="h-2 text-black border-black bg-black " /> */}
          <div className="w-[100%] flex flex-col border-0 mb-3 border-background-color font-[Montserrat] text-[1.2rem] font-bold text-[#474270] ">
            <span className="mb-4 text-[1.2rem] text-justify">
              Join us on this journey of empowerment and change. Explore our
              website to learn more about our mission, initiatives, and events.
              Get involved, raise your voice, and be part of the movement that
              is shaping the future of education. Together, we can make a
              difference.
            </span>
            <span className="text-[1.4rem] ">
              Welcome to FSU. Welcome to a brighter tomorrow.
            </span>
          </div>
          <Link
            href="#about"
            className="bg-background-color opacity-80 hover:opacity-100 text-white px-10 mt-3 py-2 rounded-lg text-center w-max font-semibold text-lg font-[Poppins]"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default First;
