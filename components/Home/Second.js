import React from "react"
import { Inter, Freehand } from "next/font/google"
// import { env } from "@next/env";
import Image from "next/image"
const inter = Inter({ subsets: ["latin"] })
const freehand = Freehand({ subsets: ["latin"], weight: "400" })

const Second = () => {
  return (
    <div
      className={`${inter.classsName}flex flex-col absolute xl:relative h-[100%] xl:h-[100vh] w-[100%] bg-[#EC6936] text-white xl:overflow-hidden`}>
      <div className="absolute px-20 xl:px-56 flex flex-col justify-center items-center top-[14%] xl:top-[30%] xl:w-[70%] gap-10">
        <h2 className="font-extrabold text-3xl">
          What our president has to say
        </h2>

        <p className={`text-3xl ${freehand.className}`}>
          &quot;Lorem ipsum dolor sit amet. Ea dicta deleniti sit nobis beatae
          est autem officia sed inventore sunt et magnam expedita? Est repellat
          rerum non voluptas rerum ut omnis beatae? Aut deserunt nulla aut rerum
          expedita aut internos architecto vel natus harum. Qui accusamus
          veritatis et consequuntur rerum qui commodi voluptates qui quia
          voluptatem.&quot;
        </p>
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold">- Nabin Shrestha</p>
          <p className="text-xl font-semibold">
            President (FSU Purwanchal Campus, Dharan)
          </p>
        </div>
      </div>
      <Image
        src="/nabinstha-removebg-preview.png"
        alt="FSU President"
        height={500}
        width={700}
        className="xl:absolute right-0 bottom-0  hidden xl:block"
      />
    </div>
  )
}

export default Second
