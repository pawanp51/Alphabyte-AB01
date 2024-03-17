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

const ShortlistedCandidates = () => {
  const location = useLocation();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("shortlist"))
  );

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("shortlist")));
  }, [location]);

  return (
    <div className="text-slate-200 p-5">
      <h1 className="text-3xl tracking-wide font-bold mb-10">
        Shortlisted Candidates
      </h1>

      <Table>
        <TableCaption>A list of shortlisted candidats.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Education</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.excelData.map((excel) => (
            <TableRow>
              <TableCell>{excel?.name}</TableCell>
              <TableCell>{excel?.email}</TableCell>
              <TableCell>{excel?.contact}</TableCell>
              <TableCell>{excel?.skills}</TableCell>
              <TableCell>{excel?.experience}</TableCell>
              <TableCell>{excel?.education}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShortlistedCandidates;
