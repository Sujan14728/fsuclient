import { notice } from "@/api/notice";
import RecentNotice from "@/components/Notice/RecentNotice";
import SingleNotice from "@/components/Notice/SingleNotice";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Notice = () => {
  const [loading, setLoading] = useState(true);

  const addLoader = () => {
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(addLoader, 500);
  });

  return (
    <div className="flex justify-center w-[100vw] ">
      <div className="container md:w-[60%] px-5 py-4">
        {loading ? (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {notice.map((item, i) => (
              <div key={i} className="p-4 md:w-1/2 lg:w-1/3 sm:mb-0 mb-6">
                <Skeleton className="h-[10rem]" />
                <Skeleton className="h-[1.5rem]" />
                <Skeleton className="h-[1.5rem]" width={"80%"} />
                <Skeleton className="h-[1.5rem]" width={"40%"} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {notice &&
              notice.map((item, i) => <SingleNotice key={i} item={item} />)}
          </div>
        )}
      </div>
      <div className="container hidden lg:flex md:w-[20%] h-max px-5 py-4">
        <RecentNotice />
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const result = await fetch("http://localhost:8000/notice");
//   const notice = await result.json();

//   return {
//     props: { notice },
//   };
// };

export default Notice;
