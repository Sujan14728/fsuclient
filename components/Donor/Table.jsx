import React, { useEffect, useState } from "react"
import { donors } from "@/api/donors"
import { motion, AnimatePresence } from "framer-motion"
const Table = () => {
  const [filteredData, setFilteredData] = useState()
  const [groupSelected, setGroupSelected] = useState("all")
  const [blank, setBlank] = useState(false)
  const [selectedPage, setSelectedPage] = useState(1)
  const [paginatedBtn, setPaginatedBtn] = useState(1)

  const handleFilter = () => {
    let LimitedFilter = []
    let filter = donors.filter((data, i) => {
      if (groupSelected === "all") {
        return data
      }
      if (groupSelected === data.blood) {
        return true
      } else {
        return false
      }
    })
    let btnArray = []
    for (let i = 1; i <= Math.ceil(filter.length / 16); i++) {
      let btn = (
        <button
          value={i}
          key={i}
          className={`font-[Poppins] px-4 py-2 mb-2 ${
            selectedPage == i ? "bg-background-color rounded-md text-white" : ""
          } `}
          onClick={(e) => {
            setSelectedPage(e.target.value)
          }}>
          {i}
        </button>
      )
      btnArray.push(btn)
    }
    setPaginatedBtn(btnArray)
    for (let i = (selectedPage - 1) * 16; i < selectedPage * 16; i++) {
      if (filter[i]) {
        LimitedFilter.push(filter[i])
      }
    }
    setFilteredData(LimitedFilter)
  }

  const handleGroup = (e) => {
    setGroupSelected(e.target.value)
  }
  useEffect(() => {
    handleFilter()
  }, [groupSelected, selectedPage])

  return (
    <div className="shadow-lg rounded-b-lg flex flex-col w-[100%] md:w-[100%] lg:w-[50%] items-center min-h-[50rem] h-max relative">
      <div className="bg-background-color rounded-t-lg text-white w-[100%] flex justify-center items-center h-[3rem] ">
        <span className="font-bold text-[1.5rem] font-[Montserrat] ">
          Student's Blood Group
        </span>
      </div>
      <div className="flex mt-4 w-[100%] justify-between">
        <div className="flex items-center ml-2">
          <label htmlFor="group" className="font-semibold font-[Montserrat]">
            Blood Group:
          </label>
          <select
            onChange={handleGroup}
            name="group"
            id="group"
            className="ml-4 rounded w-[6rem] cursor-pointer bg-white outline-none border-2 border-background-color text-background-color p-1 font-[Poppins] hover:text-white hover:bg-background-color">
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
        <tbody className="text-[0.9rem] text-center font-[Poppins]">
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
                  initial={{ opacity: 0, x: "10rem" }}
                  animate={{
                    opacity: 100,
                    x: 0,
                  }}
                  exit={{ x: "-10rem", opacity: 0 }}
                  transition={{ duration: 0.5 }}>
                  <td className=" p-2 uppercase">{item.name}</td>
                  <td className=" p-2">{item.blood}</td>
                  <td className=" p-2">{item.address}</td>
                  <td className=" p-2">{item.contact}</td>
                </motion.tr>
              ))}
          </AnimatePresence>
        </tbody>
      </table>
      <div className="flex relative mt-2 text-right flex-row items-center justify-end left-[30%]">
        <div>
          <button
            className={`px-4 pb-[0.9rem] pt-2 bg-[#ffffff] text-black rounded-lg ${
              selectedPage == 1 ? "cursor-not-allowed" : ""
            } `}
            onClick={() => {
              if (selectedPage > 1) setSelectedPage(selectedPage - 1)
            }}>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22">
              <path
                d="M10 14L3 7.5 10 1"
                stroke="currentColor"
                stroke-linecap="square"></path>
            </svg>
          </button>
        </div>
        <div className="px-4 bg-[#ffffff] text-black rounded-lg">
          {paginatedBtn}
        </div>
        <div>
          <button
            className={`px-4 pb-[0.9rem] pt-2 ${
              selectedPage == paginatedBtn.length ? "cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (selectedPage < paginatedBtn.length)
                setSelectedPage(selectedPage + 1)
            }}>
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23">
              <path
                d="M5 14l7-6.5L5 1"
                stroke="currentColor"
                stroke-linecap="square"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table
