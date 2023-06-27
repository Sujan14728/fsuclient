import React, { useEffect, useState } from "react";
import { notice } from "@/api/notice";
import Image from "next/image";
import Link from "next/link";

const RecentNotice = () => {
  const [recentNews, setRecentNews] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const newsCount = 5;

  const getRecentNews = () => {
    const updatedRecentNews = [];
    for (let i = 4; i >= 0; i--) {
      updatedRecentNews.push(notice[i]);
    }
    setRecentNews(updatedRecentNews);
  };

  useEffect(() => {
    setLoading(true);
    getRecentNews();
    setLoading(false);
  }, []);

  return (
    <div className="shadow-lg shadow-[#07040334] rounded-lg p-4">
      <div>
        <span className="font-bold text-2xl text-[#2e4f96] ">Recent News</span>
      </div>
      {recentNews &&
        recentNews.map((item, i) => (
          <div key={i}>
            <div className="flex items-start mb-6  py-2">
              <Image
                alt="notice"
                width={20}
                height={20}
                src="/icons/notice.png"
                className="object-contain mt-1"
              />
              <Link href={`/notice/${item.id}`}>
                <span className="ml-2 font-semibold text-[1.2rem] leading-[1.5rem] hover:text-background-color ">
                  {item.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecentNotice;
