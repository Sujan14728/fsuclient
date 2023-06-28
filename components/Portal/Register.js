import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import React from "react";

const register = () => {
  return (
    <div className="flex flex-row gap-0">
      <div className="mx-auto">
        <Image
          src="/Mobile-login-Cristina.jpg"
          height={30}
          width={800}
          alt="Portal"
          className=" my-10"
        />
      </div>
      <div className="text-center flex flex-col justify-center items-center w-[40vw] shadow-lg rounded mx-auto">
        <h3 className="font-bold text-2xl uppercase mb-3">Join us!</h3>
        <p className="text-lg font-light mb-10">
          Get access to the portal by signing up
        </p>
        <form className="flex flex-col gap-10">
          <div className="flex flex-row gap-10 items-center justify-center">
            <label htmlFor="email">
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
            <input
              type="email"
              placeholder="College Email Address"
              id="email"
              name="email"
              className=" border-b-2  border-black outline-none w-[15vw] py-[2px]"
            />
          </div>
          <div className="flex flex-row gap-10 items-center justify-center">
            <label htmlFor="password">
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
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className=" border-b-2 border-black outline-none w-[15vw] py-[2px]"
            />
          </div>
          <div className="flex flex-row gap-10 items-center justify-center">
            <label htmlFor="confpassword">
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
            <input
              type="password"
              placeholder="Confirm Password"
              id="confpassword"
              name="confpassword"
              className=" border-b-2 border-black outline-none w-[15vw] py-[2px]"
            />
          </div>
          <Link
            href="/portal"
            className="border-2 border-black rounded px-9 py-2 mx-auto hover:scale-90"
          >
            Register
          </Link>
          <p>
            Already have an account?
            <Link href="/login" className="duration-300 text-[#EC6936] ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default register;
