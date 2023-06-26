import Image from "next/image"
import { Inter } from "next/font/google"
import Second from "@/components/Home/Second"
import First from "@/components/Home/First"
import Third from "@/components/Home/Third"
import Footer from "@/components/Home/Footer"
import Fourth from "@/components/Home/Fourth"
import Contact from "@/components/Home/Contact"
// import { env } from "@next/env";
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Contact />
      <Footer />
    </>
  )
}
