import React from "react"
import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

const First = () => {
  return (
    <div
      className={`${inter.classsName} flex flex-row lg:flex-col px-5 lg:px-15 xl:relative h-[100%] xl:h-[100vh] mt-10`}>
      <Image
        src="/undraw_showing_support_re_5f2v.svg"
        alt="FSU"
        height={800}
        width={900}
        className="xl:absolute top-[5vh] lg:left-[4vw] hidden lg:block"
        
      />
      <div className="xl:absolute xl:left-[55vw] top-[15vh] flex flex-col gap-2 pr-5">
        <h1 className=" text-sm lg:text-4xl uppercase font-extrabold text-white bg-gradient-to-r from-[#EC6936] to-[#faab8c] rounded w-max px-5 py-3">
          Free Student Union
        </h1>
        <p className="uppercase text-sm px-2 lg:text-lg mb-5">ioe purwanchal campus</p>
        <p className="border-0 hover:border-l-[3px] pl-2 mb-2 border-[#EC6936]">
          Lorem ipsum dolor sit amet. Ea dicta deleniti sit nobis beatae est
          autem officia sed inventore sunt et magnam expedita? Est repellat
          rerum non voluptas rerum ut omnis beatae? Aut deserunt nulla aut rerum
          expedita aut internos architecto vel natus harum. Qui accusamus
          veritatis et consequuntur rerum qui commodi voluptates qui quia
          voluptatem.
        </p>
        <Link
          href="/"
          className="bg-[#EC6936] opacity-70 hover:opacity-100 text-white px-10 py-2 border-0 rounded text-center w-max font-semibold text-sm lg:text-lg mb-10">
          About Us
        </Link>
      </div>
    </div>
  )
}

export default First
