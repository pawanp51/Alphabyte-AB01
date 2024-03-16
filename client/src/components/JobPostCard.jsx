import { Timer, Users } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const JobOpeningCard = () => {
  const skills = [
    "Proficiency in Python, Java, or similar programming languages",
    "Experience with cloud platforms such as AWS, Azure, or GCP Strong",
    "Understanding of software architecture and design principles",
  ];

  const [view, setView] = useState(false);

  const viewMore = () => {
    setView(!view);
  };

  return (
    <div className="transition-all p-6 bg-[#191b2e] border border-[#2d2f40] text-slate-300 rounded-xl">
      <p className="text-sm italic text-end">Posted 1 day ago</p>
      <div className="flex flex-col">
        <div>
          <h1 className="text-sky-600 underline  tracking-wide text-2xl font-bold">
            Full stack developer
          </h1>
          <p className="mt-1">Google</p>
          <p className="text-sm">Pune, Maharashtra, India</p>
        </div>

        <div className="flex mt-6">
          <div className="px-2 py-1 rounded-md bg-gray-500/80 font-medium">
            Full Time
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium">Skill Requirements</p>
          <div className="text-sm p-3 rounded-xl bg-[#2d2f40] mt-2">
            <ul className="list-disc pl-4">
              {skills.map((skill, index) => (
                <li className="text-justify" key={index}>
                  {" "}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {view && (
          <div className="mt-6">
            <p className="font-medium">Job Description</p>
            <div className="p-3 rounded-xl bg-[#2d2f40] mt-2">
              <p className="text-justify text-sm">
                As a Senior Software Engineer at XYZ Tech Solutions, you will be
                responsible for leading the development of scalable web
                applications using cutting-edge technologies. You will
                collaborate with cross-functional teams to architect, design,
                and implement robust software solutions. This role requires
                expertise in backend development, proficiency in cloud
                platforms, and strong problem-solving skills.
              </p>
            </div>
          </div>
        )}

        {view && (
          <div className="mt-6">
            <p className="font-medium">Comapany Description</p>
            <div className="p-3 rounded-xl bg-[#2d2f40] mt-2">
              <p className="text-justify text-sm">
                As a Senior Software Engineer at XYZ Tech Solutions, you will be
                responsible for leading the development of scalable web
                applications using cutting-edge technologies. You will
                collaborate with cross-functional teams to architect, design,
                and implement robust software solutions. This role requires
                expertise in backend development, proficiency in cloud
                platforms, and strong problem-solving skills.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-2">
          <div
            role="button"
            onClick={viewMore}
            className="px-2 py-1 text-sm rounded-md font-medium bg-gray-800"
          >
            {view ? "View less.." : "View more.."}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 tracking-wide font-medium p-2 text-sm rounded-xl rounded-bl-none text-emerald-300/80 text-slate-100">
            <Users size={20} /> 214 Applicants
          </div>

          <Dialog>
            <DialogTrigger>
              <div className="p-2 flex gap-2 font-medium tracking-wide text-sm text-sky-600 border border-sky-600 hover:bg-sky-800/10 rounded-xl rounded-br-none">
                <Timer size={20} />
                Schedule Interview
              </div>
            </DialogTrigger>

            <DialogContent></DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default JobOpeningCard;
