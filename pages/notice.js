import { notice } from "@/api/notice";
import RecentNotice from "@/components/Notice/RecentNotice";
import SingleNotice from "@/components/Notice/SingleNotice";
import React from "react";

const Notice = () => {
  return (
    <div className="flex justify-center w-[100vw] ">
      <div className="container md:w-[60%] px-5 py-4">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {notice && notice.map((item) => <SingleNotice item={item} />)}
        </div>
      </div>
      <div className="container hidden md:flex md:w-[20%]  px-5 py-4">
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
