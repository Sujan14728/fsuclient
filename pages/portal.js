import React, { useState } from "react";
import Login from "./login";
import Form from "@/components/Portal/Form";

const Portal = () => {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <div className="w-[100vw] flex justify-center items-center h-[100vh]">
      {loggedin ? <Form /> : <Login />}
    </div>
  );
};

export default Portal;
