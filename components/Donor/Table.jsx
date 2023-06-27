import React, { useEffect, useState } from "react";
import { donors } from "@/api/donors";
import { motion, AnimatePresence } from "framer-motion";
const Table = () => {
  const [filteredData, setFilteredData] = useState(donors);
  const [groupSelected, setGroupSelected] = useState("all");
  const [selectedPage, setSelectedPage] = useState(1);
  const [paginatedBtn, setPaginatedBtn] = useState();

  const handleFilter = () => {
    let LimitedFilter = [];
    let filter = donors.filter((data, i) => {
      if (groupSelected === "all") {
        return data;
      }
      if (groupSelected === data.blood) {
        return true;
      } else {
        return false;
      }
    });
    let btnArray = [];
    for (let i = 1; i <= Math.ceil(filter.length / 16); i++) {
      let btn = (
        <button
          value={i}
          key={i}
          className={`p-2 mb-2 ${
            selectedPage == i ? "bg-background-color rounded-md text-white" : ""
          } `}
          onClick={(e) => {
            setSelectedPage(e.target.value);
          }}
        >
          {i}
        </button>
      );
      btnArray.push(btn);
    }
    setPaginatedBtn(btnArray);
    for (let i = (selectedPage - 1) * 16; i < selectedPage * 16; i++) {
      if (filter[i]) {
        LimitedFilter.push(filter[i]);
      }
    }
    setFilteredData(LimitedFilter);
  };

  const handleGroup = (e) => {
    setGroupSelected(e.target.value);
  };
  useEffect(() => {
    handleFilter();
  }, [groupSelected, selectedPage]);

  return (
    <div className="shadow-lg rounded-b-lg flex flex-col w-[100%] md:w-[70%] lg:w-[50%] items-center h-[50rem] relative">
      <div className="bg-background-color rounded-t-lg text-white w-[100%] flex justify-center items-center h-[3rem] ">
        <span className="font-bold text-[1.5rem] font-[Helvetica] ">
          Student's Blood Group
        </span>
      </div>
      <div className="flex mt-4 w-[100%] justify-between">
        <div className="flex items-center ml-2">
          <label htmlFor="group" className="font-semibold ">
            Blood Group:
          </label>
          <select
            onChange={handleGroup}
            name="group"
            id="group"
            className="ml-4 rounded-lg w-[6rem] cursor-pointer bg-background-color outline-none text-white p-1"
          >
            <option value="all">All</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        {/* <div className="flex">
          <label htmlFor="faculty">Faculty:</label>
          <select name="faculty" id="faculty" className="ml-4 w-[6rem] ">
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div> */}
      </div>
      <table className="w-[100%] mt-4" id="blood-group-info">
        <tbody className="text-[0.9rem]">
          <tr>
            <th className=" p-2 w-[30%]">Name</th>
            <th className=" p-2 w-[20%]">Blood Group</th>
            <th className=" p-2 w-[30%]">Address</th>
            <th className=" p-2 w-[20%]">Contact no.</th>
          </tr>
          <AnimatePresence>
            {filteredData &&
              filteredData.map((item, i) => (
                <motion.tr
                  key={i}
                  initial={{ x: "10rem" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-10rem", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <td className=" p-2">{item.name}</td>
                  <td className=" p-2">{item.blood}</td>
                  <td className=" p-2">{item.address}</td>
                  <td className=" p-2">{item.contact}</td>
                </motion.tr>
              ))}
          </AnimatePresence>
        </tbody>
      </table>
      <div className="flex absolute bottom-0 mt-2">
        <div>
          <button
            className={`p-2 bg-[#ffffff] text-black rounded-lg mr-2 ${
              selectedPage == 1 ? "cursor-not-allowed" : ""
            } `}
            onClick={() => {
              if (selectedPage > 1) setSelectedPage(selectedPage - 1);
            }}
          >
            prev
          </button>
        </div>
        <div>{paginatedBtn}</div>
        <div>
          <button
            className={`p-2 ${
              selectedPage == paginatedBtn.length ? "cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (selectedPage < paginatedBtn.length)
                setSelectedPage(selectedPage + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
