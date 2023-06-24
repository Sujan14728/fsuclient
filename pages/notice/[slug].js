import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NoticeSlug = () => {
  const [notice, setNotice] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.slug;
  const getNotice = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`http://localhost:8000/notice/${id}`);
      setNotice(data.notice);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (id) {
      getNotice();
    }
  }, [id]);

  return (
    <>
      {loading && (
        <div className="h-[80vh] w-[100vw] flex justify-center items-center ">
          <Image width={200} height={200} src="/spinner.gif" />
        </div>
      )}
      {!loading && (
        <div>
          <h1 className="text-2xl">{notice.title}</h1>
        </div>
      )}
    </>
  );
};

export default NoticeSlug;
