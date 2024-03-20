import React from "react";

const Feedback = () => {
  return (
    <div className="text-slate-200 w-full">
      {" "}
      <div className="p-10 ">
        <div className="flex items-center justify-between mb-10 text-slate-200">
          <h1 className="text-3xl tracking-wide font-medium">Feedback</h1>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="p-4 bg-[#191b2e] text-slate-100 rounded-xl">
            <p className="font-medium text-xl">1.</p>
            <div className="p-4 rounded-xl bg-[#2d2f40]">
              <p className="text-justify">
                More than I expected I was chilling at home when I suddenly got
                the message “results are out”, so naturally I checked it out. I
                was shivering (I don’t know why, because board results don’t
                even matter for medical), and eventually pressed enter and found
                this
              </p>
            </div>
          </div>
          {/* <div className="p-4 bg-[#191b2e] text-slate-100 rounded-xl">
            <p className="font-medium text-xl">2.</p>
            <div className="p-4 rounded-xl bg-[#2d2f40]">
              <p className="text-justify">
                More than I expected I was chilling at home when I suddenly got
                the message “results are out”, so naturally I checked it out. I
                was shivering (I don’t know why, because board results don’t
                even matter for medical), and eventually pressed enter and found
                this
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#191b2e] text-slate-100 rounded-xl">
            <p className="font-medium text-xl">3.</p>
            <div className="p-4 rounded-xl bg-[#2d2f40]">
              <p className="text-justify">
                More than I expected I was chilling at home when I suddenly got
                the message “results are out”, so naturally I checked it out. I
                was shivering (I don’t know why, because board results don’t
                even matter for medical), and eventually pressed enter and found
                this
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
