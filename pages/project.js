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
      btn[i].classList.remove("bg-[#fa8c25c9]");
      btn[i].classList.add("hover:bg-[#f0a1685e]");
      if (selectedOption === btn[i].value) {
        btn[i].classList.add("bg-[#fa8c25c9]");
        btn[i].classList.remove("hover:bg-[#f0a1685e]");
      }
    }
  };

  useEffect(() => {
    handleFilter();
    handleSelect();
  }, [selectedOption]);

  return (
    <div className="container mx-auto p-5">
      <div className="flex w-[100%] justify-center ">
        <div className="" id="filter">
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="all"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            All
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Website"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            Website
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="UI/UX"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            UI/UX
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="AI"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            AI
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Android App"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            Android App
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Electronics"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            Electronics
          </button>
          <button
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
            value="Robotics"
            className="p-2 hover:bg-[#f0a1685e] rounded-lg mr-1 "
          >
            Robotics
          </button>
        </div>
      </div>
      <AnimatePresence>
        <motion.div className="flex flex-wrap">
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
