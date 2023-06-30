import React, { useEffect, useState } from "react";
import Routine from "@/components/Class/Routine";
import Teachers from "@/components/Class/Teachers";

const Classroom = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] flex justify-center bg-[#ffffff]">
      <div className="w-[80%] flex justify-between mt-10">
        <Routine />
        <Teachers />
      </div>
    </div>
  );
};

export default Classroom;
