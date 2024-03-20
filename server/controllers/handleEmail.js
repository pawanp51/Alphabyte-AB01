import jwt from 'jsonwebtoken';
import Recruiter from "../models/recruiter.js";
import { sendEmail } from "../utils/email.js";

export const sendEmails = async (req, res) => {
  const {emails : emails, token : token} = req.body;
  const recruiterId = jwt.verify(token, process.env.JWT_SECRET).id;
  console.log(recruiterId);
  const recruiter = await Recruiter.findById(recruiterId);
  const recruiterName = recruiter.username;
  const company = recruiter.company;
  const msg = sendEmail(emails, recruiterName, company);
  console.log(msg);
  return res.status(200).json({
    status : 200,
    msg : "Emails sent successfully"
  })
}

