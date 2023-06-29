import Image from "next/image";
import React, { useEffect, useState } from "react";
import { project } from "@/api/project";
import SingleProject from "@/components/Project/SingleProject";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";

const Project = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [filteredProject, setFilteredProject] = useState();

  const handleFilter = () => {
    let filter = project.filter((item) => {
      if (selectedOption === "all") {
        return item;
      } else if (selectedOption === item.category) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProject(filter);
  };

  const handleSelect = () => {
    let btn = document.querySelectorAll("#filter")[0];
    btn = btn.children;
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("bg-background-color");
      btn[i].classList.add("hover:bg-[#22168e4f]");
      btn[i].classList.remove("text-white");
      if (selectedOption === btn[i].value) {
        btn[i].classList.add("bg-background-color");
        btn[i].classList.remove("hover:bg-[#22168e4f]");
        btn[i].classList.add("text-white");
      }
    }
  };

  useEffect(() => {
    handleFilter();
    handleSelect();
  }, [selectedOption]);

  return (
    <div className=" w-[100%] flex flex-col items-center mb-10 ">
      <div className="flex w-[80%] justify-center mt-10 ">
        <div className="" id="filter">
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="all"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            All
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Agriculture"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Agriculture
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Architecture"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Architecture
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Civil"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Civil
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Computer"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Computer
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Electrical"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Electrical
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Electronics"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Electronics
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Mechanical"
            className="p-2 hover:bg-[#22168e4f] rounded-lg mr-1 "
          >
            Mechanical
          </button>
        </div>
      </div>
      <AnimatePresence>
        <motion.div className="flex flex-wrap w-[80%]">
          {filteredProject &&
            filteredProject.map((item, i) => (
              <SingleProject key={i} item={item} index={i} />
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Project;
