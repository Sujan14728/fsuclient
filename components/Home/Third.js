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
  const variants = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="h-[100%] w-[100%] my-10 flex flex-col items-center  ">
      <h3 className="text-center text-3xl ">Meet the team</h3>
      <motion.div
        className="rounded p-4 text-center mx-10 xl:w-[50vw] flex flex-col items-center mb-9 relative"
        viewport={{ once: true }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <div className="w-[100%] flex justify-center ">
          <Image
            src="/members/nabinstha.jpg"
            alt="nabin Shrestha"
            width={500}
            height={300}
            className="bg-black rounded-lg"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          }}
          className="w-[40%] flex flex-col items-center absolute bottom-0 bg-white rounded-xl shadow-xl "
        >
          <h3 className="text-xl font-bold text-center ">Nabin Shrestha</h3>
          <p>President</p>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-2"
        >
          {committee?.map((item) => (
            <motion.div
              key={item.id}
              className="rounded p-4 text-center flex justify-center relative mx-6 md:mx-14"
              variants={itemVariants}
            >
              <div className="w-[100%] flex justify-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={300}
                  height={100}
                  className="bg-black rounded-lg mx-auto object-cover"
                />
              </div>
              <motion.div
                variants={variants}
                transition={{
                  duration: 1,
                  type: "spring",
                  damping: 10,
                  stiffness: 300,
                }}
                className="min-w-[40%] max-w-full flex flex-col items-center absolute bottom-0 bg-white rounded-xl shadow-xl px-4 py-1"
              >
                <h3 className="text-[0.6rem] font-bold text-center lg:text-base">
                  {item.name}
                </h3>
                <p className="lg:text-base text-[0.5rem] ">{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Third;
