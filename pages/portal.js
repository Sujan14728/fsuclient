import React, { useState } from "react"
import Form from "@/components/Portal/Form"
import Login from "@/components/Portal/Login"

const Portal = () => {
  const [loggedin, setLoggedin] = useState(false)
  return (
    <div className="w-[100vw] flex justify-center items-center h-[100vh]">
      {loggedin ? <Form /> : <Login />}
    </div>
  )
}

export default Portal
