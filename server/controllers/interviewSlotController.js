import InterviewSlot from "../models/interviewSlot.js";

export const createSlots = async (req, res) => {
  let {
    jobId,
    startDate,
    endDate,
    startTime,
    endTime,
    interval,
    breakDuration,
  } = req.body;

  startTime = parseInt(startTime.split(":")[0], 10);
  endTime = parseInt(endTime.split(":")[0], 10);

  const candidates = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Brown",
    "William Davis",
    "Emma Wilson",
    "James Taylor",
    "Olivia Martinez",
    "Alexander Anderson",
    "Sophia White",
    "Daniel Thomas",
    "Charlotte Clark",
    "Matthew Rodriguez",
    "Ava Lewis",
    "Ethan Walker",
    "Amelia Hall",
    "David Allen",
    "Mia Scott",
    "Joseph Baker",
    "Grace Carter",
  ];

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

      const timeInterval = totalInterviewTime;

      // Create interview slots for each candidate
      let currentSlotStart = currentStartTime;
      for (let i = 0; i < candidates.length; i++) {
        // Check if the current slot exceeds the end time for the day
        if (currentSlotStart > currentEndTime) {
          // No more slots can be scheduled for the day
          break;
        }

        const dateFormatted = currentSlotStart.toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        const startTimeFormatted = currentSlotStart.toLocaleTimeString(
          "en-US",
          {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }
        );

        let endTimeForCandidate = new Date(
          currentSlotStart.getTime() + interval * 60 * 1000
        );

        // Check if endTimeForCandidate exceeds currentEndTime
        if (endTimeForCandidate > currentEndTime) {
          // Adjust endTimeForCandidate to currentEndTime
          endTimeForCandidate = currentEndTime;
        }

        const endTimeFormatted = endTimeForCandidate.toLocaleTimeString(
          "en-US",
          {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }
        );

        // Create and save the interview slot
        const interviewSlot = new InterviewSlot({
          date: dateFormatted,
          startTime: startTimeFormatted,
          endTime: endTimeFormatted,
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

    res.status(200).json({slots : interviewSlots}); // Changed status to 200 for success
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
