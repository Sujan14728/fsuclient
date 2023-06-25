import React from "react"
import { Inter, Freehand } from "next/font/google"
// import { env } from "@next/env";
import Image from "next/image"
const inter = Inter({ subsets: ["latin"] })
const freehand = Freehand({ subsets: ["latin"], weight: "400" })

const Second = () => {
  return (
    <div
      className={`${inter.classsName}flex flex-col relative h-[100vh] w-[100%] bg-[#EC6936] text-white overflow-hidden`}>
      <div className="absolute px-56 flex flex-col justify-center items-center top-[30%] w-[70%] gap-10">
        <h2 className="font-extrabold text-3xl">
          What our president has to say
        </h2>

        <p className={`text-3xl ${freehand.className}`}>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30">
            <path
              d="M1.5 6.5h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10A3.5 3.5 0 005 13.5m3.5-7h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10a3.5 3.5 0 003.5 3.5"
              stroke="currentColor"></path>
          </svg>
          Lorem ipsum dolor sit amet. Ea dicta deleniti sit nobis beatae est
          autem officia sed inventore sunt et magnam expedita? Est repellat
          rerum non voluptas rerum ut omnis beatae? Aut deserunt nulla aut rerum
          expedita aut internos architecto vel natus harum. Qui accusamus
          veritatis et consequuntur rerum qui commodi voluptates qui quia
          voluptatem.
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="mr-0">
            <path
              d="M1.5 6.5h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10A3.5 3.5 0 005 13.5m3.5-7h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10a3.5 3.5 0 003.5 3.5"
              stroke="currentColor"></path>
          </svg>
        </p>
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold">- Nabin Shrestha</p>
          <p className="text-xl font-semibold">
            President (FSU Purwanchal Campus, Dharan)
          </p>
        </div>
      </div>
      <Image
        src="/PRESIDENT.png"
        alt="FSU President"
        height={500}
        width={1011}
        className="absolute right-0 overflow-hidden"
      />
    </div>
  )
}

export default Second
