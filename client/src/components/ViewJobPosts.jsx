import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';
import axios from 'axios';

const ViewJobPosts = () => {
    const user = useSelector((state) => state.user);
    const creatorId = user?.currentUser?.user?._id;
    console.log("Fetching posts of", creatorId);

    const fetchRecruiterPosts = async() => {
        try{
            const response = await axios.get(`/job/getJobPosts/${creatorId}`);
            console.log(response.data);
            
        }catch(error){

        }
    }
    useEffect(() => {
        fetchRecruiterPosts(creatorId);
    },[user])
  return (
    <div>
      These are your JObs
    </div>
  )
}

export default ViewJobPosts
