import Candidate from "../models/candidate.js";
import Recruiter from "../models/recruiter.js";
import jwt from "jsonwebtoken";

const getProfile = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    if (token) {
      const userId = jwt.verify(token, process.env.JWT_SECRET).id;
      console.log(userId);
      const candidate = await Candidate.findById(userId);
      console.log(candidate);
      if (candidate) {
        return res.json(candidate);
      }
      const recruiter = await Recruiter.findById(userId);
      if (recruiter) {
        return res.json(recruiter);
      } else {
        return res.status(400).json({ msg: "user not found" });
      }
    } else {
      return res.status(400).json({ msg: "token not found" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

getOthers = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    const candidate = await Candidate.findById(id);
    if (candidate) {
      return res.json(candidate);
    }
    const recruiter = await Recruiter.findById(id);
    if (recruiter) {
      return res.json(recruiter);
    } else {
      return res.status(400).json({ msg: "user not found" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

export { getProfile };
