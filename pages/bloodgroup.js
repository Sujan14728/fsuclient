import DonorForm from "@/components/Donor/DonorForm";
import Table from "@/components/Donor/Table";
import React from "react";

const BloodGroup = () => {
  return (
    <div className=" w-[100%] flex ">
      <div className="flex w-full mt-10 flex-col items-center">
        <Table />
        <DonorForm />
      </div>
    </div>
  );
};

export default BloodGroup;
