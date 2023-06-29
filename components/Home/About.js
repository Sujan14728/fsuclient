import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-[100%] h-max bg-[#d3d2d236] text-white flex justify-center min-h-[100vh]"
    >
      <div className=" lg:w-[80%]  flex lg:flex-row flex-col items-center lg:items-stretch justify-between mb-20 mt-20 relative ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="w-[90%] lg:w-[35%] h-max flex flex-col md:justify-between relative text-center top-0 mb-4 lg:mb-0 bg-background-color rounded-lg "
        >
          <div className=" text-white p-4">
            <span className="font-bold text-xl text-[#e8eaec] mb-2 uppercase font-[Poppins] ">
              Message from Campus Chief
            </span>
            <div className=" p-4 flex flex-col justify-center items-center ">
              <div className="w-[60%] overflow-hidden rounded-md">
                <Image
                  alt="campus chief"
                  src="/campuschief.jpg"
                  width={800}
                  height={100}
                  className="scale-150"
                />
              </div>
              <div className="flex flex-col font-bold uppercase mt-4 items-center">
                <span>Kaji Ram Karki</span>
                <span className="font-light uppercase">Campus Chief</span>
                <span className="font-light uppercase">
                  IOE Purwanchal Campus
                </span>
              </div>
            </div>
            <p className="font-light font-[Lobster] italic text-lg mt-2 mb-4 ">
              "FSU is a vibrant and inclusive political organization dedicated
              to representing the voices and concerns of students at our campus.
              We believe that students have the power to shape their own
              educational journey and contribute to positive change within our
              institution."
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="w-[90%] lg:w-[60%] justify-center relative right-0 top-0"
        >
          <div className="bg-white text-black rounded-lg">
            <div className="flex flex-col p-4 items-center gap-10 ">
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                className="font-bold text-3xl font-[Poppins]"
              >
                Welcome to the FSU Community!
              </motion.span>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.25, duration: 0.5 },
                }}
                className="text-lg font-semibold text-justify mb-3 "
              >
                We are a dynamic and progressive political organization
                dedicated to representing and advocating for the rights and
                interests of students in Nepal. Founded with the vision of
                empowering students and fostering positive change within the
                education system, FSU has been at the forefront of student
                activism and advocacy since its inception. As an integral part
                of the All Nepal National Free Students Union (ANNFSU), we work
                tirelessly to address the issues faced by students across the
                country. At FSU, we firmly believe that education is not only a
                means to acquire knowledge but also a catalyst for social
                transformation. Our primary goal is to ensure that every student
                in Nepal has access to quality education, equal opportunities,
                and a supportive learning environment. We strive to create a
                platform where students can voice their concerns, engage in
                constructive dialogue, and actively contribute to shaping
                educational policies.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
