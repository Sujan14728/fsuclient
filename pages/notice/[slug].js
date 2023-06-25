import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { notice } from "@/api/notice";
import { motion } from "framer-motion";
import RecentNotice from "@/components/Notice/RecentNotice";

const NoticeSlug = () => {
  // console.log(notice);
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.slug;
  const getNotice = async () => {
    try {
      // const { data } = await axios.get(`http://localhost:8000/notice/${id}`);
      const data = notice.filter((item) => {
        if (item.id == id) {
          return item;
          // console.log(item);
        }
      });
      setNews(data[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (id) {
      setLoading(true);
      setTimeout(getNotice, 1000);
    }
  }, [id]);

  const date = new Date(news.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    timeZone: "Asia/Kathmandu",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
  });
  return (
    <>
      {loading && (
        <div className="h-[80vh] w-[100vw] flex justify-center items-center ">
          <Image alt="loader" width={200} height={200} src="/spinner.gif" />
        </div>
      )}
      {!loading && (
        <div className="container mx-auto p-5 w-[100%] flex flex-col items-center ">
          <div className="mb-14 ">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-[#f87563] font-extrabold font-[Arial]"
            >
              {news.title}
            </motion.h1>
            <div className="w-[100%] flex h-[4rem] items-center">
              <Image
                alt="clock icon"
                width={20}
                height={20}
                src="/icons/calendar.png"
                className="object-contain"
              />
              <span className="ml-2 font-semibold">{formattedDate}</span>
            </div>
          </div>
          <div className="flex w-[100%] justify-around ">
            <div className="w-[100%] md:w-[60%]">
              {news.image && (
                <img
                  alt="notice image"
                  src={`${news.image}`}
                  className="cursor-pointer"
                />
              )}
            </div>
            <div className="container hidden lg:flex md:w-[30%]  px-5 py-4 h-max">
              <RecentNotice />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeSlug;
