import Class from "@/pages/class"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Faculty = ({ item }) => {
  //   const date = new Date(item.createdAt)

  //   const formattedDate = date.toLocaleDateString("en-US", {
  //     timeZone: "Asia/Kathmandu",
  //   })
  //   const formattedTime = date.toLocaleTimeString("en-US", {
  //     timeZone: "Asia/Kathmandu",
  //   })

  return (
    <div className="p-4 w-full h-full md:w-1/2 lg:w-1/3 sm:mb-0 mb-6">
      <div className="h-[18rem] md:h-[10rem] flex justify-center items-center rounded-lg overflow-hidden bg-gradient-to-tr from-background-color to-secondary-color">
        <Image
          width={160}
          height={160}
          alt="content"
          className="object-contain object-center"
          src="/fsu.png"
          priority
        />
      </div>
      <Link
        href={`/classes/${item.id}`}
        className="text-xl font-medium title-font text-gray-900 mt-2 cursor-pointer ">
        {item.title}
      </Link>
      <span className="flex text-[1rem] font-semibold text-[#4e4d4d] ">
        {item.name}
        {/* <div className="flex ml-2 md:flex-row">
          <span className="mr-2">{formattedDate}</span>
          <span>{formattedTime}</span>
        </div> */}
      </span>
      {/* <a className="text-indigo-500 inline-flex items-center mt-3">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a> */}
    </div>
  )
}

export default Faculty
