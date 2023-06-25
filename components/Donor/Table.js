import React, { useEffect, useState } from "react";
import { donors } from "@/api/donors";
import { motion, AnimatePresence } from "framer-motion";
const Table = () => {
  const [filteredData, setFilteredData] = useState(donors);

  const [groupSelected, setGroupSelected] = useState("all");
  // const [groupFiltered, setGroupFiltered] = useState();

  const handleFilter = () => {
    let filter = donors.filter((data) => {
      if (groupSelected === "all") {
        return data;
      }
      if (groupSelected === data.blood) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredData(filter);
  };

  const handleGroup = (e) => {
    setGroupSelected(e.target.value);
  };
  useEffect(() => {
    handleFilter();
  }, [groupSelected]);

  return (
    <div className="shadow-lg rounded-b-lg flex flex-col w-[100%] md:w-[70%] lg:w-[50%] items-center">
      <div className="bg-secondary-color rounded-t-lg text-white w-[100%] flex justify-center items-center h-[3rem] ">
        <span className="font-bold ">Student's Blood Group</span>
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
            className="ml-4 rounded-lg w-[6rem] cursor-pointer bg-secondary-color outline-none text-white p-1"
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
            {filteredData.map((item, i) => (
              <motion.tr
                key={i}
                initial={{ x: "10rem" }}
                animate={{ x: 0 }}
                exit={{ x: "-10rem", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <td className=" p-2">{item.name}</td>
                <td className=" p-2">{item.blood}</td>
                <td className="bp-2">{item.address}</td>
                <td className=" p-2">{item.contact}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
