import InterviewSlot from "../models/interviewSlot.js";

export const createSlots = async (req, res) => {
  const {
    startDate,
    endDate,
    candidates,
    recruiterStartTime,
    recruiterEndTime,
    interviewDuration,
    breakDuration,
  } = req.body;

  try {
    const interviewSlots = [];
    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);

    // Iterate through each day between start date and end date
    while (currentDate <= lastDate) {
      // Set the start and end time for the current day
      const currentStartTime = new Date(currentDate);
      const currentEndTime = new Date(currentDate);
      currentStartTime.setHours(recruiterStartTime);
      currentEndTime.setHours(recruiterEndTime);

      const totalAvailableTime =
        (currentEndTime - currentStartTime) / 1000 / 60;

      const totalInterviewTime = interviewDuration + breakDuration;

      const totalInterviewsTime = candidates.length * totalInterviewTime;

      if (totalInterviewsTime > totalAvailableTime) {
        throw new Error(
          "Total interview time exceeds available time for the day"
        );
      }

      const timeInterval = totalInterviewTime;

      // Create interview slots for each candidate
      let currentSlotStart = currentStartTime;
      for (let i = 0; i < applicantIds.length; i++) {
        const startTimeForCandidate = new Date(currentSlotStart);
        const endTimeForCandidate = new Date(
          startTimeForCandidate.getTime() + interviewDuration * 60 * 1000
        );

        // Create and save the interview slot
        const interviewSlot = new InterviewSlot({
          startTime: startTimeForCandidate,
          endTime: endTimeForCandidate,
          candidate: candidates[i],
        });

        interviewSlots.push(interviewSlot);

        // Calculate the start time for the next slot (after the break)
        currentSlotStart = new Date(
          endTimeForCandidate.getTime() + breakDuration * 60 * 1000
        );
      }

      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Save all interview slots in bulk
    await InterviewSlot.insertMany(interviewSlots);

    return interviewSlots;
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
