import candidate from "../models/candidate.js";
import projectModel from "../models/projectModel.js";

export const addProject = async (req, res) => {
  const { candidateId, projectTitle, projectDesc, projectPic } = req.body;

  try {
    const newProject = new projectModel({
      candidateId,
      projectTitle,
      projectDesc,
      projectPic,
    });
    await newProject.save();

    const updateCandidate = await candidate
      .findByIdAndUpdate(
        candidateId,
        { $push: { projects: newProject._id } },
        { new: true }
      )
      .populate("projects")
      .exec();

    return res.status(201).json(updateCandidate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
