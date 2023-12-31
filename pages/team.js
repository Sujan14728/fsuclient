import React from "react"
import Image from "next/image"
import { committee } from "@/api/committee"
import { AnimatePresence, motion } from "framer-motion"

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 },
  }
  const variants = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <div className="h-[100%] w-[80%] my-10 mx-auto flex flex-col items-center relative ">
    <div className="flex flex-col">
      <h3 className="text-center text-3xl font-[Montserrat] font-bold mb-9">Meet the team!</h3>
      <Image src="/stroke.png" height={10} width={100} alt="stroke" className="absolute -rotate-[25deg] ml-[12rem] mt-5" />
    </div>
      {/* <motion.svg
        initial={{ scale: 1, x: 0, y: 0 }}
        drag
        dragConstraints={{ left: -100, right: 1000, top: 0, bottom: 3000 }}
        viewBox="0 0 900 900"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[20rem] -top-[4rem] z-10"
      >
        <path
          d="M86,66Q76,82,59.5,81Q43,80,28,74Q13,68,13,50Q13,32,26.5,19Q40,6,58,11.5Q76,17,86,33.5Q96,50,86,66Z"
          fill="#9b9b9b"
        >
          <animate
            attributeName="d"
            dur="10000ms "
            repeatCount="indefinite"
            values="
              M83,71Q74,92,52,88.5Q30,85,24.5,67.5Q19,50,25.5,34.5Q32,19,52,15.5Q72,12,82,31Q92,50,83,71Z;
              M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z;
              M76,65Q67,80,47.5,83.5Q28,87,18,68.5Q8,50,19,32.5Q30,15,51.5,12.5Q73,10,79,30Q85,50,76,65Z;
              M77.5,63.5Q65,77,46.5,82.5Q28,88,20,69Q12,50,22,34.5Q32,19,53.5,13Q75,7,82.5,28.5Q90,50,77.5,63.5Z;
              M85,70.5Q73,91,54,83.5Q35,76,23,63Q11,50,21,34Q31,18,50,17.5Q69,17,83,33.5Q97,50,85,70.5Z;
              M82,69Q72,88,48.5,90Q25,92,16,71Q7,50,18,32Q29,14,49.5,15Q70,16,81,33Q92,50,82,69Z;
              M84.5,67.5Q70,85,48.5,88Q27,91,16.5,70.5Q6,50,17,30.5Q28,11,49,13.5Q70,16,84.5,33Q99,50,84.5,67.5Z;
              M82.5,69.5Q72,89,53,83Q34,77,25,63.5Q16,50,21,29.5Q26,9,46.5,14.5Q67,20,80,35Q93,50,82.5,69.5Z;

              M84.5,67.5Q70,85,48.5,88Q27,91,16.5,70.5Q6,50,17,30.5Q28,11,49,13.5Q70,16,84.5,33Q99,50,84.5,67.5Z;
              M82,69Q72,88,48.5,90Q25,92,16,71Q7,50,18,32Q29,14,49.5,15Q70,16,81,33Q92,50,82,69Z;
              M85,70.5Q73,91,54,83.5Q35,76,23,63Q11,50,21,34Q31,18,50,17.5Q69,17,83,33.5Q97,50,85,70.5Z;
              M77.5,63.5Q65,77,46.5,82.5Q28,88,20,69Q12,50,22,34.5Q32,19,53.5,13Q75,7,82.5,28.5Q90,50,77.5,63.5Z;
              M76,65Q67,80,47.5,83.5Q28,87,18,68.5Q8,50,19,32.5Q30,15,51.5,12.5Q73,10,79,30Q85,50,76,65Z;
              M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z;
              M83,71Q74,92,52,88.5Q30,85,24.5,67.5Q19,50,25.5,34.5Q32,19,52,15.5Q72,12,82,31Q92,50,83,71Z;
              "
          ></animate>
        </path>
      </motion.svg> */}
      <motion.svg
        initial={{ scale: 1, x: 100, y: 100 }}
        animate={{
          scale: 1,
          x: [100, 300, 500, 800, 1200, 1500, 1200, 800, 400, 300, 200, 100],
          y: [100, 150, 200, 500, 400, 300, 500, 800, 1000, 600, 300, 100],
        }}
        transition={{ duration: 120, repeat: "infinite" }}
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-[10rem] -top-[10rem] ">
        <path
          d="M86,66Q76,82,59.5,81Q43,80,28,74Q13,68,13,50Q13,32,26.5,19Q40,6,58,11.5Q76,17,86,33.5Q96,50,86,66Z"
          fill="#42444b38">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="
              M83,71Q74,92,52,88.5Q30,85,24.5,67.5Q19,50,25.5,34.5Q32,19,52,15.5Q72,12,82,31Q92,50,83,71Z;
              M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z;
              M76,65Q67,80,47.5,83.5Q28,87,18,68.5Q8,50,19,32.5Q30,15,51.5,12.5Q73,10,79,30Q85,50,76,65Z;
              M77.5,63.5Q65,77,46.5,82.5Q28,88,20,69Q12,50,22,34.5Q32,19,53.5,13Q75,7,82.5,28.5Q90,50,77.5,63.5Z;
              M85,70.5Q73,91,54,83.5Q35,76,23,63Q11,50,21,34Q31,18,50,17.5Q69,17,83,33.5Q97,50,85,70.5Z;
              M82,69Q72,88,48.5,90Q25,92,16,71Q7,50,18,32Q29,14,49.5,15Q70,16,81,33Q92,50,82,69Z;
              M84.5,67.5Q70,85,48.5,88Q27,91,16.5,70.5Q6,50,17,30.5Q28,11,49,13.5Q70,16,84.5,33Q99,50,84.5,67.5Z;
              M82.5,69.5Q72,89,53,83Q34,77,25,63.5Q16,50,21,29.5Q26,9,46.5,14.5Q67,20,80,35Q93,50,82.5,69.5Z;

              M84.5,67.5Q70,85,48.5,88Q27,91,16.5,70.5Q6,50,17,30.5Q28,11,49,13.5Q70,16,84.5,33Q99,50,84.5,67.5Z;
              M82,69Q72,88,48.5,90Q25,92,16,71Q7,50,18,32Q29,14,49.5,15Q70,16,81,33Q92,50,82,69Z;
              M85,70.5Q73,91,54,83.5Q35,76,23,63Q11,50,21,34Q31,18,50,17.5Q69,17,83,33.5Q97,50,85,70.5Z;
              M77.5,63.5Q65,77,46.5,82.5Q28,88,20,69Q12,50,22,34.5Q32,19,53.5,13Q75,7,82.5,28.5Q90,50,77.5,63.5Z;
              M76,65Q67,80,47.5,83.5Q28,87,18,68.5Q8,50,19,32.5Q30,15,51.5,12.5Q73,10,79,30Q85,50,76,65Z;
              M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z;
              M83,71Q74,92,52,88.5Q30,85,24.5,67.5Q19,50,25.5,34.5Q32,19,52,15.5Q72,12,82,31Q92,50,83,71Z;
              "></animate>
        </path>
      </motion.svg>
      {/* <motion.svg
        initial={{ scale: 1, x: 1000, y: 1000 }}
        animate={{
          scale: 1,
          x: [1000, 900, 800, 600, 500, 1300, 1000, 800, 400, 300, 200, 1000],
          y: [1000, 850, 700, 400, 500, 400, 500, 800, 900, 600, 300, 1000],
        }}
        transition={{ duration: 120, repeat: "infinite" }}
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-[10rem] -top-[10rem]  "
      >
        <path
          d="M86,66Q76,82,59.5,81Q43,80,28,74Q13,68,13,50Q13,32,26.5,19Q40,6,58,11.5Q76,17,86,33.5Q96,50,86,66Z"
          fill="#42444b38"
        >
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="
              M83,71Q74,92,52,88.5Q30,85,24.5,67.5Q19,50,25.5,34.5Q32,19,52,15.5Q72,12,82,31Q92,50,83,71Z;
              M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z;
              M76,65Q67,80,47.5,83.5Q28,87,18,68.5Q8,50,19,32.5Q30,15,51.5,12.5Q73,10,79,30Q85,50,76,65Z;
              M77.5,63.5Q65,77,46.5,82.5Q28,88,20,69Q12,50,22,34.5Q32,19,53.5,13Q75,7,82.5,28.5Q90,50,77.5,63.5Z;
              M85,70.5Q73,91,54,83.5Q35,76,23,63Q11,50,21,34Q31,18,50,17.5Q69,17,83,33.5Q97,50,85,70.5Z;
              M82,69Q72,88,48.5,90Q25,92,16,71Q7,50,18,32Q29,14,49.5,15Q70,16,81,33Q92,50,82,69Z;
              M84.5,67.5Q70,85,48.5,88Q27,91,16.5,70.5Q6,50,17,30.5Q28,11,49,13.5Q70,16,84.5,33Q99,50,84.5,67.5Z;
              M82.5,69.5Q72,89,53,83Q34,77,25,63.5Q16,50,21,29.5Q26,9,46.5,14.5Q67,20,80,35Q93,50,82.5,69.5Z;

              M84.5,67.5Q70,85,48.5,88Q27,91,16.5,70.5Q6,50,17,30.5Q28,11,49,13.5Q70,16,84.5,33Q99,50,84.5,67.5Z;
              M82,69Q72,88,48.5,90Q25,92,16,71Q7,50,18,32Q29,14,49.5,15Q70,16,81,33Q92,50,82,69Z;
              M85,70.5Q73,91,54,83.5Q35,76,23,63Q11,50,21,34Q31,18,50,17.5Q69,17,83,33.5Q97,50,85,70.5Z;
              M77.5,63.5Q65,77,46.5,82.5Q28,88,20,69Q12,50,22,34.5Q32,19,53.5,13Q75,7,82.5,28.5Q90,50,77.5,63.5Z;
              M76,65Q67,80,47.5,83.5Q28,87,18,68.5Q8,50,19,32.5Q30,15,51.5,12.5Q73,10,79,30Q85,50,76,65Z;
              M77,68.5Q71,87,51.5,84.5Q32,82,18.5,66Q5,50,19,35Q33,20,49.5,21.5Q66,23,74.5,36.5Q83,50,77,68.5Z;
              M83,71Q74,92,52,88.5Q30,85,24.5,67.5Q19,50,25.5,34.5Q32,19,52,15.5Q72,12,82,31Q92,50,83,71Z;
              "
          ></animate>
        </path>
      </motion.svg> */}
      <div className="rounded p-4 text-center mx-10 xl:w-[50vw] flex flex-col items-center relative">
        <div className="w-[100%] flex justify-center ">
          <Image
            src="/members/nabinstha.jpg"
            alt="nabin Shrestha"
            width={500}
            height={300}
            className="bg-black rounded-lg object-cover w-[30rem] h-[30rem]"
            unoptimized
          />
        </div>

        <div className="min-w-[20%] max-w-full flex flex-col items-center bg-white rounded-xl shadow-xl px-4 py-1 mt-2 font-[Montserrat]">
          <h3 className="text-xl font-bold text-center">Nabin Shrestha</h3>
          <p>President</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {committee?.map((item) => (
          <div
            key={item.id}
            className="rounded p-4 text-center flex flex-col justify-center relative">
            <div className=" flex justify-center">
              <Image
                src={item.src}
                alt={item.name}
                width={150}
                height={150}
                className="bg-black w-[20rem] h-[20rem] object-cover rounded-lg"
              />
            </div>
            <div className="min-w-[40%] max-w-full flex flex-col items-center bg-white rounded-xl shadow-xl px-4 py-1 mt-2 font-[Montserrat]">
              <h3 className="text-[0.8rem] font-bold text-center lg:text-[1.1rem]">
                {item.name}
              </h3>
              <p className="lg:text-[1rem] text-[0.7rem]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
