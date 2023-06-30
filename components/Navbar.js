import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [openNav, setOpenNav] = useState(false);
  // const [openClass, setOpenClass] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    console.log("scrolled");
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener(
      "scroll",
      function () {
        changeNavbarColor();
      },
      false
    );
  }
  const handleNavChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      className={`text-gray-600 body-font duration-500 sticky top-0 z-10 px-2  w-[100vw] ${
        colorChange ? "bg-background-color text-white" : "bg-[#ffffff]"
      }`}
    >
      <AnimatePresence>
        {openNav && <Sidebar openNav={openNav} setOpenNav={setOpenNav} />}
      </AnimatePresence>
      <div
        className={`flex justify-center w-[100%]
        `}
      >
        <div className="flex justify-between items-center lg:flex-row w-[80%] ">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              src={colorChange ? "/fsu.png" : "/logofsu.png"}
              width={80}
              height={80}
              alt="FSU Logo"
              className={`duration-300 ${
                colorChange ? "scale-90" : "scale-100"
              }`}
            />
            <div
              className={`flex flex-col ${
                colorChange ? "text-white" : "text-black"
              }`}
            >
              <span className="ml-3 text-xl">FSU</span>
              <span className="ml-3 text-sm">Purwanchal Campus, Dharan</span>
            </div>
          </Link>
          <div
            className="flex lg:hidden cursor-pointer"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <Image
              width={30}
              height={30}
              src={colorChange ? "/icons/menu-white.png" : "/icons/menu.png"}
              alt="Menu"
            />
          </div>
          <div className="hidden lg:flex items-center">
            <div className=" flex items-center text-base justify-center ">
              <Link
                href="/"
                className={`${
                  path == "/" && "text-sixth-color"
                }  mr-8 text-lg ${
                  colorChange
                    ? "hover:border-white hover:text-white"
                    : "hover:border-background-color"
                }`}
              >
                Home
              </Link>
              <Link
                href="/notice"
                value="/notice"
                className={`${
                  path == "/notice" && "text-sixth-color"
                } mr-8 text-lg ${
                  colorChange
                    ? "hover:border-white hover:text-white"
                    : "hover:border-background-color"
                }`}
              >
                Notice
              </Link>
              <Link
                href="/project"
                value="/project"
                className={`${
                  path == "/project" && "text-sixth-color"
                } mr-8 text-lg ${
                  colorChange
                    ? "hover:border-white hover:text-white"
                    : "hover:border-background-color"
                }`}
              >
                Project
              </Link>
              <Link
                href="/bloodgroup"
                value="/bloodgroup"
                className={`${
                  path == "/bloodgroup" && "text-sixth-color"
                } mr-8 text-lg ${
                  colorChange
                    ? "hover:border-white hover:text-white"
                    : "hover:border-background-color"
                }`}
              >
                Blood Group
              </Link>
              <Link
                href="/classroom"
                value="/classroom"
                className={`${
                  path == "/classroom" && "text-sixth-color"
                } mr-8 text-lg ${
                  colorChange
                    ? "hover:border-white hover:text-white"
                    : "hover:border-background-color"
                }`}
              >
                Class Details
                {/* <motion.img
                src="/icons/down.png"
                className={`scale-x-0 group-hover:scale-x-100 duration-300 object-contain ml-1`}
                width={10}
                height={10}
              /> */}
                {/* <span className="group-hover:flex hidden flex-col absolute top-16 -left-[50%] w-[14rem] rounded-2xl text-[#ffffff] bg-[#EC6936]  justify-center items-center ">
                <Link
                  href="/class/routine"
                  className="py-2 w-[100%] flex justify-center  hover:text-white"
                >
                  Routine
                </Link>
                <Link
                  href="/class/teachers"
                  className="py-2 w-[100%] flex justify-center  hover:text-white"
                >
                  Teacher&apos;s Details
                </Link>
              </span> */}
              </Link>
            </div>
            <Link href="/portal">
              <button
                className={`inline-flex items-center font-semibold bg-[#ec6a36cc] hover:bg-[#d6d6d6] text-fourth-color hover:text-[#EC6936] border-0 py-2 px-8 focus:outline-none duration-300 rounded text-base mt-4 md:mt-0 ${
                  colorChange
                    ? "hover:bg-black hover:text-secondary-color "
                    : "hover:bg-background-color hover:text-white"
                }
      `}
              >
                Portal
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
