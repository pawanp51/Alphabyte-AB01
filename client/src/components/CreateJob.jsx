import  { useState } from "react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

const JobOpeningForm = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // console.log(user?.currentUser?.user?._id);
  const creatorId = user?.currentUser?.user?._id;
  console.log(creatorId);
  const [jobData, setJobData] = useState({
    creator : "",
    role: "",
    location: "",
    companyName: "",
    companyDesc: "",
    skillReq: "",
    exp: "",
    jobDesc: "",
  });
  const handleClear = () => {
    setJobData({
      creator : "",
      role: "",
      location: "",
      companyName: "",
      companyDesc: "",
      skillReq: "",
      exp: "",
      jobDesc: "",
    });
  }
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setJobData({ ...jobData, creator: creatorId });
    console.log("creator ID", creatorId);
    const response = await axios.post("/job/createJob", jobData);
    console.log(response.data.msg);
    toast.success(`${response.data.msg}`)
    navigate('/viewJobPosts');
  };
  return (
    <div className="w-4/5 p-20 flex justify-center items-center">
      <div className="w-full text-slate-100 rounded-xl p-4 bg-[#191b2e]">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex gap-6 justify-between">
            <div className="w-1/2 flex flex-col">
              <label className="font-medium">
                Company Name<span className="text-red-600">*</span>
              </label>
              <input
                name="companyName"
                onChange={handleChange}
                placeholder="XYZ"
                className="outline-none px-3 py-2 h-10 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
              />
            </div>{" "}
            <div className="w-1/2 flex flex-col">
              <label className="font-medium">
                Location<span className="text-red-600">*</span>
              </label>
              <input
                name="location"
                onChange={handleChange}
                placeholder="India"
                className="outline-none px-3 py-2 h-10 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">
              Company Description<span className="text-red-600">*</span>
            </label>
            <textarea
              name="companyDesc"
              placeholder="Company Description"
              onChange={handleChange}
              className="outline-none px-3 py-2 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
            />
          </div>{" "}
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col w-1/2">
              <label className="font-medium">
                Role<span className="text-red-600">*</span>
              </label>
              <input
                name="role"
                onChange={handleChange}
                placeholder="Full stack developer"
                className="outline-none px-3 py-2 h-10 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="font-medium">
                Experience Required (in years)
                <span className="text-red-600">*</span>
              </label>
              <input
                name="exp"
                onChange={handleChange}
                type="number"
                placeholder="5"
                className="outline-none px-3 py-2 h-10 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">
              Skill Requirements<span className="text-red-600">*</span>
            </label>
            <input
              name="skillReq"
              onChange={handleChange}
              placeholder="React, Tailwind"
              className="outline-none px-3 py-2 h-10 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">
              Job Description<span className="text-red-600">*</span>
            </label>
            <textarea
              name="jobDesc"
              placeholder="Job Description"
              onChange={handleChange}
              className="outline-none px-3 py-2 rounded-md bg-[#030519]/50 border border-[#2d2f40] focus:ring-indigo-500 focus:ring-2 mt-1"
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="p-2 text-lg font-medium bg-indigo-500 hover:bg-indigo-600 hover:scale-105 mt-4"
            >
              Create Job Opening
            </Button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default JobOpeningForm;
