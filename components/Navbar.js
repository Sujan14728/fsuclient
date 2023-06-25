import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  typeof window !== "undefined" &&
    window.addEventListener("scroll", changeNavbarColor)

  return (
    <div
      className={`text-gray-600 body-font shadow duration-500 z-10 fixed w-[100%] ${
        colorChange ? "bg-[#EC6936] text-white" : "bg-white"
      }`}>
      <AnimatePresence>
        {openNav && <Sidebar openNav={openNav} setOpenNav={setOpenNav} />}
      </AnimatePresence>
      <div
        className={` flex justify-between px-5 items-center lg:flex-row ${
          colorChange ? "py-2" : "py-5"
        }`}>
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logofsu.png" width={80} height={80} alt="FSU Logo" className={`duration-300 ${colorChange? "scale-90": "scale-100"}`} />
          <div
            className={`flex flex-col ${
              colorChange ? "text-white" : "text-black"
            }`}>
            <span className="ml-3 text-xl">FSU</span>
            <span className="ml-3 text-sm">Purwanchal Campus, Dharan</span>
          </div>
        </Link>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => {
            setOpenNav(!openNav)
          }}>
          <Image width={30} height={30} src="/icons/menu.png" alt="Menu" />
        </div>

        <div className="hidden lg:flex items-center">
          <div className=" flex items-center text-base justify-center ">
            <Link
              href="/"
              className={`mr-5 hover:border-b-2 hover:pb-1 ${
                colorChange
                  ? "hover:border-white hover:text-white"
                  : "hover:border-[#EC6936] hover:text-[#EC6936]"
              }`}>
              Home
            </Link>
            <Link
              href="/notice"
              className={`mr-5 hover:border-b-2 hover:pb-1 ${
                colorChange
                  ? "hover:border-white hover:text-white"
                  : "hover:border-[#EC6936] hover:text-[#EC6936]"
              }`}>
              Notice
            </Link>
            <Link
              href="/project"
              className={`mr-5 hover:border-b-2 hover:pb-1 ${
                colorChange
                  ? "hover:border-white hover:text-white"
                  : "hover:border-[#EC6936] hover:text-[#EC6936]"
              }`}>
              Project
            </Link>
            <Link
              href="/bloodgroup"
              className={`mr-5 hover:border-b-2 hover:pb-1 ${
                colorChange
                  ? "hover:border-white hover:text-white"
                  : "hover:border-[#EC6936] hover:text-[#EC6936]"
              }`}>
              Blood Group
            </Link>
            <div
              className={`group relative cursor-pointer flex mr-5 py-5  hover:border-b-2 ${
                colorChange
                  ? "hover:border-white hover:text-white"
                  : "hover:border-[#EC6936] hover:text-[#EC6936]"
              }`}>
              <span>Class Details</span>
              <motion.img
                src="/icons/down.png"
                className={`scale-x-0 group-hover:scale-x-100 duration-300 object-contain ml-1`}
                width={10}
                height={10}
              />

              <span className="group-hover:flex hidden flex-col absolute top-16 -left-[50%] w-[14rem] rounded-2xl text-[#ffffff] bg-[#EC6936]  justify-center items-center ">
                <Link
                  href="/class/routine"
                  className="py-2 w-[100%] flex justify-center  hover:text-white">
                  Routine
                </Link>
                <Link
                  href="/class/teachers"
                  className="py-2 w-[100%] flex justify-center  hover:text-white">
                  Teacher&apos;s Details
                </Link>
              </span>
            </div>
          </div>
          <Link href="/portal">
            <button
              className={`inline-flex items-center bg-[#f3c1a9] text-[#F1682A] border-0 py-2 px-8 focus:outline-none transition ease-in-out delay-[5000] hover:text-white rounded text-base mt-4 md:mt-0 ${
                colorChange
                  ? "hover:bg-white hover:text-[#EC6936]"
                  : "hover:bg-[#EC6936] hover:text-white"
              }
      `}>
              Portal
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
