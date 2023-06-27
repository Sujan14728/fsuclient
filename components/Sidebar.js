import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/customHooks/useOutsideClick";
import { useRouter } from "next/router";
const Sidebar = ({ openNav, setOpenNav }) => {
  const [openClass, setOpenClass] = useState(false);

  const handleClickOutside = () => {
    setOpenClass(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      setOpenNav(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  // const classVariants = {
  //   initial: { x: "-10rem", opacity: 0 },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { staggerChildren: 0.15, ease: "easeInOut", duration: 0.5 },
  //   },
  //   exit: {
  //     x: "10rem",
  //     opacity: 0,
  //     transition: { staggerChildren: 0.15, duration: 0.3 },
  //   },
  // };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.25 }}
      className="absolute flex top-0 left-0 items-center justify-center w-[100vw] h-[100vh] bg-white z-[100] "
    >
      <div
        className="absolute left-10 top-10 cursor-pointer"
        onClick={() => setOpenNav(!openNav)}
      >
        <Image alt="closebtn" width={20} height={20} src="/icons/close.png" />
      </div>
      <div className="relative flex flex-col text-black">
        <div className="flex justify-center items-center ">
          <Image alt="fsu logo" src="/logofsu.png" width={250} height={250} />
        </div>
        <div className="relative flex flex-col items-center text-base justify-center ">
          <Link
            href="/"
            className="w-[15rem] flex justify-center items-center h-[3rem] hover:text-white hover:bg-[#165ef8] "
          >
            Home
          </Link>
          {/* <Link
            href="/about"
            className="w-[15rem] flex justify-center items-center h-[3rem] hover:text-white hover:bg-[#165ef8]"
          >
            About us
          </Link> */}
          <Link
            href="/notice"
            className="w-[15rem] flex justify-center items-center h-[3rem] hover:text-white hover:bg-[#165ef8]"
          >
            Notice
          </Link>
          <Link
            href="/project"
            className="w-[15rem] flex justify-center items-center h-[3rem] hover:text-white hover:bg-[#165ef8]"
          >
            Project
          </Link>
          <Link
            href="/bloodgroup"
            className="w-[15rem] flex justify-center items-center h-[3rem] hover:text-white hover:bg-[#165ef8]"
          >
            Blood Group
          </Link>
          {/* <Link
            href="/complain"
            className="w-[15rem] flex justify-center items-center h-[3rem] hover:text-white hover:bg-[#165ef8]"
          >
            Complain Box
          </Link> */}
          <Link href="/classroom" className="relative cursor-pointer">
            <div
              className={`w-[15rem] flex justify-center items-center h-[3rem] hover:bg-[#165ef8] hover:text-white 
              
              `}
            >
              <span>Class Details</span>
            </div>
            {/* <AnimatePresence>
              {openClass && (
                <motion.span
                  variants={classVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-col w-[15rem] text-black hover:bg-[#165ef8] justify-center items-center"
                >
                  <motion.span
                    variants={classVariants}
                    className="py-2 w-[100%] flex justify-center hover:text-white hover:bg-[#165ef8]"
                  >
                    <Link href="/class/routine" className="">
                      Routine
                    </Link>
                  </motion.span>
                  <motion.span
                    variants={classVariants}
                    className="py-2 w-[100%] flex justify-center hover:text-white hover:bg-[#165ef8]"
                  >
                    <Link href="/class/teachers">Teacher's Details</Link>
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence> */}
          </Link>
          <Link href="/portal">
            <button className="inline-flex items-center bg-[#09078377] text-white border-0 py-2 px-8 focus:outline-none hover:text-white hover:bg-background-color rounded text-base mt-6">
              Portal
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
