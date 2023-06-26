import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="py-10 flex flex-row justify-between gap-2">
        <form className="flex flex-col w-[max] lg:w-[30vw] mx-auto gap-2">
          <h3 className="text-center text-3xl mt-2 mb-8 font-bold uppercase flex flex-row items-center justify-center gap-5">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30">
              <path
                d="M14.5.5l-6 6m0 0V3m0 3.5H12M2.5.5h2.22a1 1 0 01.97.757l.585 2.345a1 1 0 01-.654 1.19l-1.108.37a1.21 1.21 0 00-.804 1.385 6.047 6.047 0 004.744 4.744 1.21 1.21 0 001.385-.804l.297-.893a1 1 0 011.396-.578l2.416 1.208a1 1 0 01.553.894V12.5a2 2 0 01-2 2h-2c-5.523 0-10-4.477-10-10v-2a2 2 0 012-2z"
                stroke="currentColor"></path>
            </svg>
            Contact us
          </h3>
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <input
            name="name"
            id="name"
            className="text-black rounded border-2 border-black p-1 mb-9 text-xl"
            type="text"
          />
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="text-black rounded border-2 border-black p-1 mb-9 text-xl"
            type="email"
          />
          <label htmlFor="message" className="text-xl">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="text-black rounded border-2 border-black p-1 mb-9 text-xl"
            rows={5}
            cols={5}
          />
          <button className="border-black text-xl rounded border-2 px-5 py-2 w-auto sm:w-[10vw] hover:bg-white hover:opacity-70">
            Submit
          </button>
        </form>
        <div className="text-white hidden lg:block mx-auto my-auto">
          <Image src="/undraw_contact_us_re_4qqt.svg" height={400} width={600} alt="Contact" />
        </div>
      </div>
    </>
  )
}

export default Contact;
