import React, { useEffect, useState } from "react";

const DonorForm = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [formData, setFormData] = useState({
    requestedBy: "",
    patientName: "",
    patientAge: "",
    bloodGroup: "",
    quantity: "",
  });

  const handleGroupChange = (e) => {
    let allInput = document.getElementsByClassName("peer");
    for (let i = 0; i < allInput.length; i++) {
      allInput[i].checked = false;
    }
    e.target.checked = true;
    setSelectedGroup(e.target.value);
    setFormData({
      ...formData,
      bloodGroup: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-max w-[100%] lg:w-[45%] shadow-lg rounded-lg mt-14">
      <form>
        <div className="flex justify-center ">
          <span className="font-bold text-2xl ">
            Request for Blood Donation
          </span>
        </div>
        <div className="flex flex-col w-[100%] p-4">
          <label htmlFor="requester_name" className="font-[Helvetica] mb-2 ">
            Requested By:
          </label>
          <input
            type="text"
            name="requester_name"
            onChange={(e) => {
              setFormData({
                ...formData,
                requestedBy: e.target.value,
              });
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="flex flex-col w-[100%] p-4">
          <label htmlFor="patient_name" className="font-[Helvetica] mb-2 ">
            Patient&apos;s Name:
          </label>
          <input
            type="text"
            name="patient_name"
            onChange={(e) => {
              setFormData({
                ...formData,
                patientName: e.target.value,
              });
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="flex flex-col w-[100%] p-4">
          <label htmlFor="patient_age" className="font-[Helvetica] mb-2 ">
            Patient's Age:
          </label>
          <input
            type="text"
            name="patient_age"
            onChange={(e) => {
              setFormData({
                ...formData,
                patientAge: e.target.value,
              });
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="flex flex-col w-[100%] p-4">
          <label className="font-[Helvetica] mb-2 ">
            Requested Blood Group:
          </label>
          <div className="mt-2 flex w-[30rem] justify-between ">
            <div>
              <input
                type="radio"
                name="O-"
                id="O-"
                value="O-"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="O-"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                O-
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="O+"
                id="O+"
                value="O+"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="O+"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                O+
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="A-"
                id="A-"
                value="A-"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="A-"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                A-
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="A+"
                id="A+"
                value="A+"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="A+"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                A+
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="B-"
                id="B-"
                value="B-"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="B-"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                B-
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="B+"
                id="B+"
                value="B+"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="B+"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                B+
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="AB-"
                id="AB-"
                value="AB-"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="AB-"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                AB-
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="AB+"
                id="AB+"
                value="AB+"
                className="hidden peer"
                onChange={handleGroupChange}
              />
              <label
                htmlFor="AB+"
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] peer-checked:text-[#fc7629] peer-checked:border-[2px] peer-checked:border-[#fc7629]"
              >
                AB+
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[100%] p-4">
          <label htmlFor="first_name" className="font-[Helvetica] mb-2 ">
            Requested Quantity(in pint):
          </label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => {
              setFormData({
                ...formData,
                quantity: e.target.value,
              });
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="w-[100%] flex justify-center mb-4">
          <button
            onClick={handleSubmit}
            className="py-4 px-8 hover:bg-primary-color bg-[#ff652975] transition-all duration-500 rounded-xl text-white"
          >
            Request Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonorForm;
