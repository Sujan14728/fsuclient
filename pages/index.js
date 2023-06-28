import Image from "next/image";
import { Inter } from "next/font/google";
import Second from "@/components/Home/Second";
import First from "@/components/Home/First";
import Third from "@/components/Home/Third";
import Footer from "@/components/Footer";
import Fourth from "@/components/Home/Fourth";
import Contact from "@/components/Home/Contact";
// import { env } from "@next/env";
const inter = Inter({ subsets: ["latin"] });
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="w-[100vw] flex flex-col items-center ">
      <div className="border-2">
        <First />
      </div>
      <div className="mt-72 xl:mt-0">
        <Second />
      </div>
      <div>
        <Third />
      </div>
      <div className="w-full">
        <Fourth />
      </div>
      <div className="w-full mb-8 ">
        <Contact />
      </div>
    </motion.div>
  );
}
