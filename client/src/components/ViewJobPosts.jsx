import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import JobPostCard from './JobPostCard'
const ViewJobPosts = () => {
    const user= useSelector((state) => state.user);
    const creatorId = user?.currentUser?.user?._id;
    const fetchRecruiterPosts = async (creatorId) => {
    
    try {
      const response = await axios.get(`/job/getJobPosts/${creatorId}`);
    //   console.log(response.data.postedJobs);
      const recuiterJobs = response?.data?.jobPosts;
      console.log(recuiterJobs);
    } catch (error) {
        console.log("error");
    }
  };
  useEffect(() => {
    fetchRecruiterPosts(creatorId);
  }, [])

  return(
    <div className="p-20 grid grid-cols-2 gap-10 justify-center item-center">
        
            {/* // recruiterJobs.map((job) => (
            //     <JobPostCard key={job._id} job = {job}/>
            // )) */}
            <JobPostCard />
            <JobPostCard/>
            <JobPostCard/>
            <JobPostCard/>
        
    </div>
  )
};

export default ViewJobPosts;
