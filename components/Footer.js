import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // <div className=" shadow-black shadow-sm text-center px-10 py-3 bg-white text-black">
    //   Copyright © 2023 | Designed and developed by{" "}
    //   <Link href="www.swikarneupane.com.np" className="hover:opacity-70">
    //     Swikar
    //   </Link>{" "}
    //   and{" "}
    //   <Link href="www.swikarneupane.com.np" className="hover:opacity-70">
    //     Sujan
    //   </Link>
    // </div>
    <footer className="text-white body-font font-[Poppins]">
      <div className=" bg-background-color px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="md:w-[40%] lg:w-[20%] flex flex-col flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <Image alt="fsu logo" src="/fsu.png" width={80} height={80} />
            <div className="w-full flex flex-col">
              <span className=" text-2xl">Free Student Union</span>
              <span className="text-sm text-[#a3a1a1] ">
                Purwanchal Campus, Dharan
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              NAVIGATION
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="/classroom"
                  className="text-white hover:text-[#65d8ec79]"
                >
                  Class Details
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-white hover:text-[#65d8ec79]"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/bloodgroup"
                  className="text-white hover:text-[#65d8ec79]"
                >
                  Blood Group
                </Link>
              </li>
              <li>
                <Link
                  href="/notice"
                  className="text-white hover:text-[#65d8ec79]"
                >
                  Notice
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-[#65d8ec79]">First Link</a>
              </li>
              <li>
                <a className="text-white hover:text-[#65d8ec79]">Second Link</a>
              </li>
              <li>
                <a className="text-white hover:text-[#65d8ec79]">Third Link</a>
              </li>
              <li>
                <a className="text-white hover:text-[#65d8ec79]">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              USEFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-[#65d8ec79]">First Link</a>
              </li>
              <li>
                <a className="text-white hover:text-[#65d8ec79]">Second Link</a>
              </li>
              <li>
                <a className="text-white hover:text-[#65d8ec79]">Third Link</a>
              </li>
              <li>
                <a className="text-white hover:text-[#65d8ec79]">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" bg-[#253B95] w-[100%] ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row w-[80%] ">
          <p className="text-white text-sm text-center sm:text-left">
            © 2023 Free Student Union, Dharan, Nepal
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-white hover:text-[#3ce4fa] shadow-lg  ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white hover:text-[#3ce4fa] shadow-lg ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white hover:text-[#3ce4fa] shadow-lg ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white hover:text-[#3ce4fa] shadow-lg ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
