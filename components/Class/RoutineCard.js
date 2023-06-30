import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import fileDownload from "js-file-download";
import axios from "axios";
import { useOutsideClick } from "@/customHooks/useOutsideClick";

const RoutineCard = ({ item }) => {
  const [selectedId, setSelectedId] = useState(null);
  const handleOutsideClick = () => {
    let count = 1;
    if (count != 1) {
      setSelectedId(null);
      count++;
    }
  };
  const ref = useOutsideClick(handleOutsideClick);

  return (
    <div
      layoutid={selectedId}
      className={`w-[80%] h-[3rem] flex justify-between items-center shadow-2xl rounded-lg bg-gradient-to-r from-[#48408d] to-[#108cf1dc] `}
    >
      <span className="px-4 text-white text-xl">
        Routine of {item.faculty} {item.year + "/" + item.semester}
      </span>
      <div className="flex gap-5 mr-5">
        <span className="cursor-pointer text-sm rounded-lg ">
          <Image
            alt="open file"
            width={20}
            height={20}
            src="/icons/open.png"
            onClick={() => {
              setSelectedId(item.id);
            }}
          />
        </span>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutid={selectedId}
            className=" bg-[#00000046] z-[100] absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#e6e6ee] w-[40rem] h-[50rem] z-[200] flex flex-col items-center relative rounded-lg"
              ref={ref}
            >
              <motion.h5 className="text-2xl font-bold mt-10">
                Routine of {item.faculty} {item.year + "/" + item.semester}
              </motion.h5>
              <div className=" w-[30rem] h-[40rem] bg-[#272c6e] mt-5 rounded-xl shadow-xl ">
                <Image
                  alt="routine"
                  width={100}
                  height={100}
                  src={item.image}
                  className="w-[30rem] h-[40rem] object-cover rounded-lg"
                />
              </div>
              <motion.button
                className="absolute right-5 top-5 "
                onClick={() => setSelectedId(null)}
              >
                <Image
                  alt="routine"
                  width={20}
                  height={20}
                  src="/icons/close.png"
                  unoptimized
                  priority
                />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoutineCard;
