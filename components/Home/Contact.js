import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#EC6936] text-white py-10 flex flex-row justify-between gap-2">
      <form className="flex flex-col w-[30vw] mx-auto gap-2">
        <label htmlFor="name" className="text-xl">
          Name
        </label>
        <input
          name="name"
          id="name"
          className="text-black rounded border-0 p-1 mb-9 text-xl outline-none"
          type="text"
        />
        <label htmlFor="email" className="text-xl">
          Email
        </label>
        <input
          name="email"
          id="email"
          className="text-black rounded border-0 p-1 mb-9 text-xl outline-none"
          type="email"
        />
        <label htmlFor="message" className="text-xl">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="text-black rounded border-0 p-1 mb-9 text-xl outline-none"
          rows={5}
          cols={5}
        />
        <button className="border-white text-xl rounded border-2 px-5 py-2 w-[10vw] hover:bg-white hover:text-[#EC6936]">
          Submit
        </button>
      </form>
      <div className="text-white mx-auto">
        <Image src="/3372216.png" height={100} width={500} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
