import React, { useEffect, useState } from "react";
import { routine } from "@/api/routine";
import RoutineCard from "./RoutineCard";
import { AnimatePresence, motion } from "framer-motion";
const Routine = () => {
  const [year, setYear] = useState("");
  const [faculty, setFaculty] = useState("all");
  const [filteredRoutine, setFilteredRoutine] = useState();
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
    console.log(filter);
    setFilteredRoutine(filter);
  };

  useEffect(() => {
    handleFilter();
  }, [year, faculty]);

  return (
    <div className="w-[50%]">
      <div className="h-[35rem] flex flex-col items-center shadow-lg rounded-xl ">
        <h1 className="text-2xl font-bold text-[#616060] text-background-color ">
          Search Your Routine
        </h1>
        <div className="w-[100%] flex justify-center gap-10 mt-4">
          <select
            name="year"
            id="year"
            className="w-[8rem]"
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
            <>
              <RoutineCard item={item} key={i} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routine;
