import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import JobApplyCard from "./JobApplyCard";

const ExploreAllJobs = () => {
  const [recruiterJobs, setRecruiterJobs] = useState([]);

  const location = useLocation();

  const fetchRecruiterPosts = async () => {
    const response = await axios.get(`/job/getAllJobPosts`);

    setRecruiterJobs(response?.data?.jobPosts);
  };
  useEffect(() => {
    fetchRecruiterPosts();
  }, [location]);

  return (
    <div className="text-slate-200">
      {" "}
      <div className="p-10 ">
        <div className="flex items-center justify-between mb-10 text-slate-200">
          <h1 className="text-3xl tracking-wide font-medium">Explore Jobs</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 justify-center item-center">
          {recruiterJobs?.length ? (
            recruiterJobs.map((job) => <JobApplyCard key={job._id} job={job} />)
          ) : (
            <div className="">No Jobs Posted</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreAllJobs;
