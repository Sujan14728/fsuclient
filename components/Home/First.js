import React from "react";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";

const First = () => {
  return (
    <motion.div
      className={`font-[Helvetica] w-[100%] min-h-[100vh] flex justify-center bg-[#fcfbfb] `}
    >
      <div className="flex flex-col xl:flex-row items-center w-[70%] ">
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
          <h1 className="text-2xl mb-5 md:text-4xl uppercase font-extrabold text-white bg-gradient-to-r from-background-color to-secondary-color rounded w-max px-5 py-3">
            Free Student Union
          </h1>
          <p className="uppercase px-2 text-base md:text-lg mb-5">
            ioe purwanchal campus
          </p>
          <p className="border-0 pl-2 mb-2 border-background-color text-justify">
            Lorem ipsum dolor sit amet. Ea dicta deleniti sit nobis beatae est
            autem officia sed inventore sunt et magnam expedita? Est repellat
            rerum non voluptas rerum ut omnis beatae? Aut deserunt nulla aut
            rerum expedita aut internos architecto vel natus harum. Qui
            accusamus veritatis et consequuntur rerum qui commodi voluptates qui
            quia voluptatem.
          </p>
          <Link
            href="#about"
            className="bg-background-color mt-4 opacity-80 hover:opacity-100 text-white px-10 py-2 rounded-lg text-center w-max font-semibold text-lg"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default First;
