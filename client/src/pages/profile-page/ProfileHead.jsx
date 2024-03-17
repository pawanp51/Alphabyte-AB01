import React from "react";

import coverPhoto from "../../assets/Cover-image.png";
import markPic from "../../assets/background-image.png";
import { Button } from "../../components/ui/button";

const ProfileHead = () => {
  return (
    <div className="bg-[#191b2e] text-slate-100 rounded-xl">
      {/* header and photo */}
      <div className="relative">
        <div className="bg-gray-600 rounded-t-xl h-40 object-cover w-full">
        <img
          className="rounded-t-xl h-40 object-cover w-full"
          src={coverPhoto}
          alt="header pic"
        />
        </div>
        <img
          className="bg-[#191b2e] p-1 rounded-md object-cover -bottom-10 left-5 absolute w-20 h-20"
          src={markPic}
          alt="profile pic"
        />
      </div>
      <div className="px-4 pb-4">
        <p className="mt-12 text-xl font-semibold">Mark Zukerberg</p>
        <p>CEO of facebook</p>
        <div className="flex gap-4 mt-4">
          <Button className=" border border-gray-50 hover:bg-gray-100 text-slate-50">
            Change photo
          </Button>
          <Button className="border border-emerald-500 hover:bg-emerald-600">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
