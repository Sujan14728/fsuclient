import Image from "next/image";
import { Inter } from "next/font/google";
import Second from "@/components/Home/Second";
import First from "@/components/Home/First";
import Third from "@/components/Home/Third";
import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
// import { env } from "@next/env";
const inter = Inter({ subsets: ["latin"] });
import { motion } from "framer-motion";

export default function Home() {
  

  return (
    <motion.div className="w-[100vw] flex flex-col items-center ">
      <div className="w-[100%] flex justify-center ">
        <First />
      </div>
      <div className="mt-72 xl:mt-0 w-[100%] bg-background-color flex justify-center">
        <Second />
      </div>
      {/* <div className="w-full">
        <About />
      </div> */}
      <div className="w-full min-h-[90vh] bg-[#9487872d] flex justify-center ">
        <Third />
      </div>
      <div className="w-full mb-8 flex justify-center ">
        <Contact />
      </div>
    </motion.div>
  );
}
