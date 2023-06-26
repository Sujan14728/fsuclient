import React from "react";

// import { env } from "@next/env";
import Image from "next/image";

const Second = () => {
  return (
    <div
      className={`w-[100%] justify-center items-center flex flex-col-reverse xl:flex-row  relative bg-background-color text-white  `}
    >
      <div className="xl:w-[55%] w-[90%] flex flex-col items-center mt-4">
        <h2 className="font-extrabold text-3xl mb-6">
          What our president has to say
        </h2>
        <p className="text-3xl font-[Lobster] italic mb-8">
          &quot;As the President of our{" "}
          <span className="font-semibold">Free Student Union</span>, I am
          honored to lead a movement dedicated to progress and inclusivity. Our
          party's mission is to advocate for student rights, engage in
          meaningful dialogue, and empower individuals through education and
          personal growth. I am committed to serving as a bridge between our
          party and the student body, listening to your ideas and working
          tirelessly towards our shared vision. Join us in creating a campus
          community that embraces diversity, fosters understanding, and
          addresses the challenges of our time. Together, we can shape a
          brighter future. Thank you.&quot;
        </p>
        <div className="flex flex-col items-center mb-10">
          <p className="text-xl font-semibold">- Nabin Shrestha</p>
          <p className="text-xl font-semibold">
            President (FSU Purwanchal Campus, Dharan)
          </p>
        </div>
      </div>
      <div className=" lg:w-[40%] ">
        <Image
          src="/nabinstha-removebg-preview.png"
          alt="FSU President"
          height={500}
          width={700}
          className=""
        />
      </div>
    </div>
  );
};

export default Second;
