import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className=" shadow-black shadow-sm text-center px-10 py-3 bg-white text-black">
      Copyright © 2023 | Designed and developed by{" "}
      <Link href="www.swikarneupane.com.np" className="hover:opacity-70">
        Swikar
      </Link>{" "}
      and{" "}
      <Link href="www.swikarneupane.com.np" className="hover:opacity-70">
        Sujan
      </Link>
    </div>
  )
}

export default Footer
