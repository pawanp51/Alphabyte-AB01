import InterviewSlot from "../models/interviewSlot.js";

export const createSlots = async (req, res) => {
  let { startDate, endDate, startTime, endTime, interval, breakDuration } =
    req.body;

  startTime = parseInt(startTime.split(":")[0], 10);
  endTime = parseInt(endTime.split(":")[0], 10);

  const candidates = ["Rohan", "Ryan", "Pawan", "Taj"];

  console.log(startDate, endDate, startTime, endTime, interval, breakDuration);
  try {
    const interviewSlots = [];
    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);

    // Iterate through each day between start date and end date
    while (currentDate <= lastDate) {
      // Set the start and end time for the current day
      const currentStartTime = new Date(currentDate);
      const currentEndTime = new Date(currentDate);
      currentStartTime.setHours(startTime);
      currentEndTime.setHours(endTime);

      const totalAvailableTime =
        (currentEndTime - currentStartTime) / 1000 / 60;

      const totalInterviewTime = interval + breakDuration;

      const totalInterviewsTime = candidates.length * totalInterviewTime;

      // if (totalInterviewsTime > totalAvailableTime) {
      //   throw new Error(
      //     "Total interview time exceeds available time for the day"
      //   );
      // }

      const timeInterval = totalInterviewTime;

      // Create interview slots for each candidate
      let currentSlotStart = currentStartTime;
      for (let i = 0; i < candidates.length; i++) {
        const startTimeForCandidate = new Date(currentSlotStart);
        const endTimeForCandidate = new Date(
          startTimeForCandidate.getTime() + interval * 60 * 1000
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

    res.status(200).json(interviewSlots); // Changed status to 200 for success
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
