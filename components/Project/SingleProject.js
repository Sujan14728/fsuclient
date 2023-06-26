import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SingleProject = ({ item, index }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      item.likes--;
    } else {
      item.likes++;
    }
  };

  return (
    <motion.div
      className="p-4 md:w-1/3 lg:w-1/4 flex flex-col"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="group w-[100%] h-[16rem] rounded-xl bg-[#e0ccb94d] relative">
        <div className="hidden group-hover:flex w-[100%] h-[100%] absolute items-end bg-gradient-to-t from-[#1111115e] to-[#fcfafa5e] ">
          <div className="w-[100%] overflow-hidden mb-4 px-4 flex justify-between items-center text-white font-bold font-[Helvetica] ">
            <span className="text-ellipsis overflow-hidden whitespace-nowrap ">
              {item.project_title}
            </span>
            <div className="flex">
              {item.web_link && (
                <div className="w-[2rem] h-[2rem] flex justify-center items-center bg-[#dbd9d9] hover:bg-[#ffffff] cursor-pointer rounded-lg">
                  <Link href={item.web_link}>
                    <Image
                      src="/icons/web.png"
                      alt="website link"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                </div>
              )}
              <div className="w-[2rem] h-[2rem] ml-2 flex justify-center items-center bg-[#dbd9d9] hover:bg-[#ffffff] cursor-pointer rounded-lg">
                <Link href={item.github}>
                  <Image
                    src="/icons/github.png"
                    alt="github link"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={300}
          height={260}
          alt="project"
          src={`${item.project_image}`}
          className="object-contain w-[100%] h-[100%]"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <div>
            <Image
              width={20}
              height={20}
              alt="profile"
              src="/dummy.webp"
              className="rounded-full object-contain"
            />
          </div>
          <span className="ml-1">{item.user_name}</span>
        </div>
        <div className="text-gray-500 flex leading-none text-sm cursor-pointer">
          <Image
            onClick={handleLike}
            alt="love"
            width={15}
            height={15}
            src={liked ? "/icons/heart-liked.png" : "/icons/heart.png"}
          />
          <span className="ml-[0.1rem] ">{item.likes}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
