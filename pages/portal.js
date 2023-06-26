import React, { useState } from "react";
import Login from "./login";
import Form from "@/components/Portal/Form";

const Portal = () => {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <div className="container mx-auto p-5">
      {loggedin ? <Form /> : <Login />}
    </div>
  );
};

export default Portal;
