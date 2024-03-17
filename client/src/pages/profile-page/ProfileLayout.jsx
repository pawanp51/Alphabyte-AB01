import React from "react";
import ProfileHead from "./ProfileHead";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";

const ProfileLayout = () => {
  return (
    <div className="w-4/5 p-20">
      <div className="flex gap-4">
        <div className="w-1/2 gap-4 flex flex-wrap flex-col">
          <ProfileHead />
          <Education />
        </div>
        <div className="w-1/2 gap-4 flex flex-col">
          <About />
          <Skills />
        </div>{" "}
      </div>
    </div>
  );
};

export default ProfileLayout;
