import React from "react";

// import { env } from "@next/env";
import Image from "next/image";
import { motion } from "framer-motion";

const Second = () => {
  return (
    <div
      className={`w-[80%] justify-center items-center flex flex-col-reverse xl:flex-row relative text-white`}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        className="xl:w-[55%] w-[90%] flex flex-col items-center mt-4"
      >
        <h2 className="font-extrabold font-[Montserrat] text-2xl md:text-3xl mb-8">
          What our president has to say:
        </h2>
        <p className="text-xl md:text-3xl text-[#f7f4f4] font-[Lobster] italic mb-8">
          &quot;As the President of our{" "}
          <span className="font-semibold">Free Student Union</span>, I am
          honored to lead a movement dedicated to progress and inclusivity. Our
          party's mission is to advocate for student rights, engage in
          meaningful dialogue, and empower individuals through education and
          personal growth. I am committed to serving as a bridge between our
          party and the student body, listening to your ideas and working
          tirelessly towards our shared vision. Join us in creating a campus
          community that embraces diversity, fosters understanding, and
          addresses the challenges of our time. Together, we can shape a
          brighter future. Thank you.&quot;
        </p>
        <div className="flex flex-col items-center text-base md:text-xl mb-10">
          <p className=" font-semibold font-[Poppins]">- Nabin Shrestha</p>
          <p className=" text-sm md:text-xl text-[#b3b0b0] font-[Poppins] font-semibold">
            President (FSU Purwanchal Campus, Dharan)
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        className="w-[80%] lg:w-[40%] "
      >
        <Image
          src="/nabinstha-removebg-preview.png"
          alt="FSU President"
          height={500}
          width={700}
          className=""
        />
      </motion.div>
    </div>
  );
};

export default Second;
