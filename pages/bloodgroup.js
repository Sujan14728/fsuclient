import DonorForm from "@/components/Donor/DonorForm";
import Table from "@/components/Donor/Table";
import React, { useEffect, useState } from "react";

const BloodGroup = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex w-[100%] flex-col lg:flex-row lg:justify-between">
        <Table />
        <DonorForm />
      </div>
    </div>
  );
};

export default BloodGroup;
