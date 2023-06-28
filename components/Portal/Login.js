import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Signin from "./Signin";

const Login = () => {
  const [loginPage, setLoginPage] = useState(true);

  const handleClick = () => {
    setLoginPage(!loginPage);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="absolute top-0 left-0 ">
        <Image
          alt="portal"
          src="/portal.jpg"
          width={100}
          height={100}
          className="object-cover w-[100vw] h-[100vh]"
          unoptimized
          priority
        />
      </div>
      <div className="z-20">
        {loginPage ? (
          <motion.div
            initial={{ scale: 0, y: 300 }}
            animate={{
              scale: 1,
              y: 0,
            }}
            transition={{ delay: 0.25, duration: 0.75 }}
            className="flex flex-col text-white border-2 md:h-[38rem] md:w-[38rem] justify-center items-center shadow-lg rounded-lg z-[100] 
        bg-gradient-radial  from-[#1c327a,#1c327af8] to-[#12dee657]"
          >
            <motion.div
              initial={{ y: -400, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 2,
                },
              }}
            >
              <Image src="/fsu.png" width={200} height={200} alt="fsu" />
            </motion.div>
            <h3 className="font-bold text-2xl uppercase mb-3">
              Free Student Union
            </h3>
            <p className="text-lg mb-10">
              Get access to the portal by signing in
            </p>
            <form className="flex flex-col gap-10 w-[90%] ">
              <div className="flex flex-row items-center justify-center">
                <label htmlFor="email" className=" text-white">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                  >
                    <path
                      d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </label>
                <motion.input
                  initial={{ scale: 1 }}
                  whileFocus={{ scale: 1.05 }}
                  type="email"
                  placeholder="College Email Address"
                  autoComplete="off"
                  id="email"
                  name="email"
                  className="group outline-none w-[20rem] p-2 ml-5 rounded-lg bg-[#13d3fa38] shadow-xl text-white placeholder:text-[#ffffff7a] "
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <label htmlFor="password" className="text-white">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                  >
                    <path
                      d="M12.5 8.5v-1a1 1 0 00-1-1h-10a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-1m0-4h-4a2 2 0 100 4h4m0-4a2 2 0 110 4m-9-6v-3a3 3 0 016 0v3m2.5 4h1m-3 0h1m-3 0h1"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </label>
                <motion.input
                  initial={{ scale: 1 }}
                  whileFocus={{ scale: 1.05 }}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="outline-none w-[20rem] p-2 ml-5 rounded-lg bg-[#13d3fa38] shadow-xl text-white placeholder:text-[#ffffff7a] "
                />
              </div>
              <Link href="/portal">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 6,
                  }}
                  className="rounded-lg w-[10rem] flex justify-center py-2 mx-auto shadow-lg bg-[#11f7f7] text-[#152425]  hover:text-[#ffffff] hover:shadow-2xl hover:shadow-[#1ffaef8f]  "
                >
                  Login
                </motion.div>
              </Link>

              <div className="w-full flex justify-center">
                Don&apos;t have an account?{" "}
                <button
                  onClick={handleClick}
                  className="cursor-pointer duration-300 text-[#47d1fc] hover:text-[#3dfded] ml-2"
                >
                  Sign up
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <Signin />
        )}
      </div>
    </div>
  );
};

export default Login;
