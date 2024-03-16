import jobOpening from "../models/jobOpening.js";

export const createJobOpening = async(req, res) => {  
    const post = req.body;
    const newPost = new jobOpening({
      ...post,
      createdAt: new Date().toISOString(),
    });
    try {
      await newPost.save();
      return res.status(201).json({msg : `Post added successfully`});
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
}
//get the jobs posted by a partocular interviewer
export const getJobPosts = async(req, res) => {
  const {id} = req.params;
  console.log(id);
  try{
    const jobPosts = await jobOpening.find({creator : id});
    res.status(200).json(jobPosts);
  }catch(error){
    res.status(404).json({message : error.message});
  }
}

