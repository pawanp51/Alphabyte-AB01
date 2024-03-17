import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const InterviewSlotsTable = () => {
  const location = useLocation();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("interviewSlot"))
  );
  useEffect(() => {
    // console.log(data?.response?.data);
    setData(JSON.parse(localStorage.getItem("interviewSlot")));
  }, [location]);

  return (
    <div className="text-slate-200 p-5">
      <h1 className="text-3xl tracking-wider font-bold mb-10">
        Shortlisted Candidates
      </h1>
      <Table>
        <TableCaption>A list of shortlisted candidates.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Candidate</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Start time</TableHead>
            <TableHead>End time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.response?.data?.slots?.map((data) => (
            <TableRow>
              <TableCell>{data?.candidate}</TableCell>
              <TableCell>{data?.date}</TableCell>
              <TableCell>{data?.startTime}</TableCell>
              <TableCell>{data?.endTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button className="mt-6 tracking-wider bg-green-700">Send Confirmation Email</Button>
    </div>
  );
};

export default InterviewSlotsTable;
