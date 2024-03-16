import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import JobPostCard from "./JobPostCard";
import { Button } from "./ui/button";
import { File, Upload } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

import ExcelToJsonForm from "./ExcelToJsonForm";

const ViewJobPosts = () => {
  const user = useSelector((state) => state.user);
  const creatorId = user?.currentUser?.user?._id;
  const fetchRecruiterPosts = async (creatorId) => {
    try {
      const response = await axios.get(`/job/getJobPosts/${creatorId}`);
      //   console.log(response.data.postedJobs);
      const recuiterJobs = response?.data?.jobPosts;
      console.log(recuiterJobs);
    } catch (error) {
      consolr.log("error");
    }
  };
  useEffect(() => {
    fetchRecruiterPosts(creatorId);
  }, []);

  return (
    <div className="p-10 ">
      <div className="flex items-center justify-between mb-10 text-slate-200">
        <h1 className="text-3xl tracking-wide font-bold">Jobs Posted</h1>

        <Dialog>
          <DialogTrigger>
            <Button className="flex gap-2 text-sm bg-emerald-500 hover:bg-emerald-600">
              <File size={20} />
              Upload Shortlisted Candidates
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-[#2d2f40] text-slate-200">
            <ExcelToJsonForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-2 gap-10 justify-center item-center">
        {/* // recruiterJobs.map((job) => (
            //     <JobPostCard key={job._id} job = {job}/>
            // )) */}
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />{" "}
      </div>
    </div>
  );
};

export default ViewJobPosts;
