import React from "react"
import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

const First = () => {
  return (
    <div
      className={`${inter.classsName}flex flex-col px-15 relative h-[100vh] top-[20vh]`}>
      <Image
        src="/8778112 copy.jpg"
        alt="FSU"
        height={800}
        width={900}
        className="absolute top-[5vh] left-[4vw]"
      />
      <div className="absolute left-[55vw] top-[15vh] flex flex-col gap-2 pr-5">
        <h1 className="text-4xl uppercase font-extrabold text-white bg-gradient-to-r from-[#faab8c] to-[#EC6936] rounded w-max px-5 py-3">
          Free Student Union
        </h1>
        <p className="uppercase text-lg">ioe purwanchal campus</p>
        <p className="border-0 hover:border-l-[3px] pl-2 border-[#EC6936]">
          Lorem ipsum dolor sit amet. Ea dicta deleniti sit nobis beatae est
          autem officia sed inventore sunt et magnam expedita? Est repellat
          rerum non voluptas rerum ut omnis beatae? Aut deserunt nulla aut rerum
          expedita aut internos architecto vel natus harum. Qui accusamus
          veritatis et consequuntur rerum qui commodi voluptates qui quia
          voluptatem.
        </p>
        <Link
          href="/"
          className="bg-[#EC6936] text-white px-10 py-2 border-0 rounded text-center w-max hover:opacity-80 font-semibold text-lg">
          About Us
        </Link>
      </div>
    </div>
  )
}

export default First
