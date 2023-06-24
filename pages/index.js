import Image from "next/image";
import { Inter } from "next/font/google";
// import { env } from "@next/env";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <h1>Hello World</h1>
    </div>
  );
}
