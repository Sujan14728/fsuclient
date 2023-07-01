import React, { useEffect, useState } from "react";
import { routine } from "@/api/routine";
import RoutineCard from "./RoutineCard";
import { AnimatePresence, motion } from "framer-motion";
const Routine = () => {
  const [year, setYear] = useState("");
  const [faculty, setFaculty] = useState("all");
  const [filteredRoutine, setFilteredRoutine] = useState(null);
  const handleFilter = () => {
    let filter = routine.filter((item) => {
      if (
        (year == item.year + "/" + item.semester && faculty == item.faculty) ||
        (year == "all" && faculty == item.faculty)
      ) {
        return item;
      } else {
        return null;
      }
    });
    setFilteredRoutine(filter);
  };

  useEffect(() => {
    handleFilter();
  }, [year, faculty]);

  return (
    <div className="w-[100%] lg:w-[60%] bg-white h-max">
      <div className="h-[40rem] flex flex-col items-center shadow-lg rounded-xl py-8 ">
        <h1 className="text-2xl font-bold text-[#314c96] font-[Montserrat]">
          Search Your Routine
        </h1>
        <div className="w-[100%] flex justify-center gap-10 mt-4">
          <select
            name="year"
            id="year"
            className="w-[8rem] h-[2rem] rounded-lg px-2 bg-white text-[#314c96] border-2 border-[#314c96] font-[Poppins]"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <option value="" hidden>
              Year
            </option>
            <option value="all">All</option>
            <option value="I/I">I/I</option>
            <option value="I/II">I/II</option>
            <option value="II/I">II/I</option>
            <option value="II/II">II/II</option>
            <option value="III/I">III/I</option>
            <option value="III/II">III/II</option>
            <option value="IV/I">IV/I</option>
            <option value="IV/II">IV/II</option>
            <option value="V/I">V/I</option>
            <option value="V/II">V/II</option>
          </select>
          <select
            name="faculty"
            id="faculty"
            value={faculty}
            className="w-[8rem] h-[2rem] rounded-lg px-2 bg-white text-[#314c96] border-2 border-[#314c96] font-[Poppins]"
            onChange={(e) => {
              setFaculty(e.target.value);
            }}
          >
            <option value="all" hidden>
              Faculty
            </option>
            <option value="Agriculture">Agriculture</option>
            <option value="Architecture">Architecture</option>
            <option value="Civil">Civil</option>
            <option value="Computer">Computer</option>
            <option value="Electrical">Electrical</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>
        <div className="mt-4 h-[30rem] w-[100%] flex flex-col gap-2 items-center">
          {filteredRoutine?.map((item, i) => (
            <RoutineCard item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routine;
