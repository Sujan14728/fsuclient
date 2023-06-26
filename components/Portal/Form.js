import React from "react"
import Link from "next/link"

const Form = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center w-[100%] lg:w-[80%] shadow-lg rounded h-[83vh] m-auto">
      <h3 className="font-bold text-2xl uppercase mb-3">Fill this form</h3>
      <p className="text-lg font-light mb-10 px-4">
        These informations will be used by FSU for various reasons
      </p>
      <form className="flex flex-col gap-10">
        <div className="flex flex-row gap-10 items-center justify-center">
          <label htmlFor="name">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23">
              <path
                clip-rule="evenodd"
                d="M10.5 3.498a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998zm2 10.992h-10v-1.996a3 3 0 013-3h4a3 3 0 013 3v1.997z"
                stroke="currentColor"
                stroke-linecap="square"></path>
            </svg>
          </label>
          <input
            type="name"
            placeholder="Name"
            id="name"
            name="name"
            className=" border-b-2  border-black outline-none w-[35vw] lg:w-[20vw] py-[2px]"
          />
        </div>
        <div className="flex flex-row gap-10 items-center justify-center">
          <label htmlFor="roll">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23">
              <path
                d="M10.5.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zm-4 9l-.354-.354A.5.5 0 009.5 13v-.5zm3 1.5h-10v1h10v-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2.5 0A1.5 1.5 0 001 1.5h1a.5.5 0 01.5-.5V0zM12 12H9.5v1H12v-1zm-2.146.854l1.792-1.793-.707-.707-1.793 1.792.708.708zM10.793 9H10.5v1h.293V9zM10.5 9A1.5 1.5 0 009 10.5h1a.5.5 0 01.5-.5V9zm1.5 1.207C12 9.54 11.46 9 10.793 9v1c.114 0 .207.093.207.207h1zm-.354.854c.227-.227.354-.534.354-.854h-1a.207.207 0 01-.06.147l.706.707zM13 3.5v10h1v-10h-1zm-11 10v-12H1v12h1z"
                fill="currentColor"></path>
            </svg>
          </label>
          <input
            type="text"
            placeholder="College Roll"
            id="roll"
            name="roll"
            className=" border-b-2 border-black outline-none w-[35vw] lg:w-[20vw] py-[2px]"
          />
        </div>
        <div className="flex flex-row gap-10 items-center justify-center">
          <label htmlFor="blood">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23">
              <path
                d="M7 1.5V2h1v-.5H7zm1-.01v-.5H7v.5h1zM8 13.5V4H7v9.5h1zm0-12v-.01H7v.01h1zM4 5h3.5V4H4v1zm-2 9h11v-1H2v1z"
                fill="currentColor"></path>
            </svg>
          </label>
          <input
            type="text"
            placeholder="Blood Group"
            id="blood"
            name="blood"
            className=" border-b-2 border-black outline-none w-[35vw] lg:w-[20vw] py-[2px]"
          />
        </div>
        <div className="flex flex-row gap-10 items-center justify-center">
          <label htmlFor="time">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23">
              <path
                d="M3.5 0v5m8-5v5m-10-2.5h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                stroke="currentColor"></path>
            </svg>
          </label>
          <input
            type="text"
            placeholder="Last Donated"
            id="time"
            name="time"
            className=" border-b-2 border-black outline-none w-[35vw] lg:w-[20vw] py-[2px]"
          />
        </div>
        <div className=" flex flex-col sm:flex-row gap-[2vw]">
          <Link
            href=".."
            className="border-2 border-black rounded px-3 sm:px-9 py-2 mx-auto hover:scale-90 w-[30vw] sm:w-auto">
            Cancel
          </Link>
          <Link
            href="/portal"
            className="border-2 border-black rounded px-3 sm:px-9 py-2 mx-auto hover:scale-90 w-[30vw] sm:w-[auto]">
            Confirm
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Form
