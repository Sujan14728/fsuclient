import React, { useEffect, useState } from "react"

const DonorForm = () => {
  const [selectedGroup, setSelectedGroup] = useState("")
  const [formData, setFormData] = useState({
    requestedBy: "",
    patientName: "",
    patientAge: "",
    bloodGroup: "",
    quantity: "",
  })

  const handleGroupChange = (e) => {
    let allInput = document.getElementsByClassName("peer")
    for (let i = 0; i < allInput.length; i++) {
      allInput[i].checked = false
    }
    e.target.checked = true
    setSelectedGroup(e.target.value)
    setFormData({
      ...formData,
      bloodGroup: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="h-max w-[100%] lg:w-[48%] shadow-lg rounded-lg mt-14 mb-10">
      <form>
        <div className="flex justify-center ">
          <span className="font-bold text-2xl text-background-color font-[Montserrat]">
            Request for Blood Donation
          </span>
        </div>
        <div className="flex flex-col w-[100%] p-4 font-[Poppins]">
          <label htmlFor="requester_name" className="mb-2 ">
            Requested By:
          </label>
          <input
            type="text"
            name="requester_name"
            onChange={(e) => {
              setFormData({
                ...formData,
                requestedBy: e.target.value,
              })
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="flex flex-col w-[100%] p-4 font-[Poppins]">
          <label htmlFor="patient_name" className="mb-2 ">
            Patient&apos;s Name:
          </label>
          <input
            type="text"
            name="patient_name"
            onChange={(e) => {
              setFormData({
                ...formData,
                patientName: e.target.value,
              })
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="flex flex-col w-[100%] p-4 font-[Poppins]">
          <label htmlFor="patient_age" className="mb-2 ">
            Patient&apos;s Age:
          </label>
          <input
            type="text"
            name="patient_age"
            onChange={(e) => {
              setFormData({
                ...formData,
                patientAge: e.target.value,
              })
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="flex flex-col w-[100%] p-4 font-[Poppins]">
          <label className="mb-2 ">Requested Blood Group:</label>
          <div className="mt-2 flex md:w-[30rem] gap-2 ">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
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
                className="h-[2rem] w-[2rem] py-2 px-3 rounded-lg cursor-pointer border-[1.5px] border-[#c3c0f1] transition-all duration-100 peer-checked:font-bold peer-checked:text-background-color peer-checked:border-[2px] peer-checked:border-background-color">
                AB+
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[100%] p-4">
          <label htmlFor="first_name" className="font-[Poppins] mb-2 ">
            Requested Quantity(in pint):
          </label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => {
              setFormData({
                ...formData,
                quantity: e.target.value,
              })
            }}
            className="border-[1.5px] border-[#c3c0f1] rounded-lg outline-none h-[3rem] text-lg px-4 "
          />
        </div>
        <div className="w-[100%] flex justify-center mb-4">
          <button
            onClick={handleSubmit}
            className="py-4 px-8 hover:bg-[#253c80] bg-[#253c8080] transition-all duration-500 rounded-xl text-fourth-color font-[Poppins]">
            Request Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default DonorForm
