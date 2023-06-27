import React from "react";
import Image from "next/image";
import { committee } from "@/api/committee";
import { AnimatePresence, motion } from "framer-motion";

const Third = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <div className="h-[100%] w-[100%] my-10">
      <h3 className="text-center text-3xl ">Meet the team</h3>
      <motion.div
        className="rounded p-4 text-center mx-10 xl:w-[50vw] mb-9 xl:mx-auto"
        viewport={{ once: true }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <Image
          src="/members/nabinstha.jpg"
          alt="nabin Shrestha"
          width={500}
          height={300}
          className="bg-black rounded-lg mx-auto"
        />
        <h3 className="text-xl font-bold text-center ">Nabin Shrestha</h3>
        <p>President</p>
      </motion.div>
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-10"
        >
          {committee?.map((item) => (
            <motion.div
              key={item.id}
              className="rounded p-4 text-center relative"
              // initial={{ x: 100 }}
              // whileInView={{ x: 0, transition: { bounce } }}
              variants={itemVariants}
            >
              <div>
                <Image
                  src={item.src}
                  alt={item.name}
                  width={300}
                  height={100}
                  className="bg-black rounded-lg mx-auto"
                />
                <h3 className="text-xl font-bold text-center">{item.name}</h3>
                <p>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Third;
