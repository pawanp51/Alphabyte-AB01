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
export const getJobPosts = async (req, res) => {
  const creatorId = req.params.creatorId;
  console.log('Creator ID:', creatorId); // Log creatorId to verify it's being correctly retrieved from the URL
  try {
    const jobPosts = await jobOpening.find({creator : creatorId});
    console.log('Job Posts:', jobPosts); // Log jobPosts to verify if any documents are returned
    res.status(200).json({ jobPosts });
  } catch (error) {
    console.error('Error fetching job posts:', error); // Log any errors that occur during the database query
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


