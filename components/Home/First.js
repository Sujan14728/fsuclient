import React from "react";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";

const First = () => {
  return (
    <motion.div
      className={`font-[Helvetica] w-[100%] h-[90vh] flex justify-center mt-10`}
    >
      <div className="w-[80%] flex flex-col xl:flex-row items-center ">
        <motion.div
          className="md:w-[60%]"
          initial={{ x: -100, y: -100 }}
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
          className="flex flex-col md:w-[50%] mt-10 h-max"
          initial={{ x: 100, y: -100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 1 } }}
        >
          {/* bg-gradient-to-r from-[#48408d] to-[#108cf1dc] */}
          <h1 className="text-2xl md:text-4xl uppercase font-extrabold text-white bg-fifth-color rounded w-max px-5 py-3 font-[Montserrat]">
            Free Student Union
          </h1>
          {/* <p className="uppercase px-2 text-base md:text-xl text-[#777676] mb-5 mt-2 font-[Poppins]">
            ioe purwanchal campus
          </p> */}
          <p className="border-0 mb-3 border-background-color font-[Montserrat] text-[2rem] font-bold text-[#5b50b8] ">
            Empowering students. Advocating for change. Creating a better
            future.
          </p>
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
