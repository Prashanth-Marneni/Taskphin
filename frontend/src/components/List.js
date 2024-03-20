import React, { useEffect, useState } from "react";

function List({ data, handleDelete,handleUpdate }) {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    setCandidates(data);
  }, [data]);
  return (
    <div className="overflow-x-auto rounded-md shadow-md">
      <table className="w-full text-sm text-left table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Skills</th>
            <th className="px-4 py-2">Score</th>
            <th className="px-4 py-2">Expected Salary</th>
            <th className="px-4 py-2">Current Status</th>
            <th className="px-4 py-2">Update</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {candidates.map((candidate) => (
            <tr
              key={candidate.id}
              className="border border-gray-200 hover:bg-gray-100"
            >
              <td className="px-4 py-2">{candidate.name}</td>
              <td className="px-4 py-2">{candidate.email}</td>
              <td className="px-4 py-2">{candidate.id}</td>
              <td className="px-4 py-2">{candidate.phone}</td>
              <td className="px-4 py-2">{candidate.skills}</td>
              <td className="px-4 py-2">{candidate.score}</td>
              <td className="px-4 py-2">{candidate.expected_salary}</td>
              <td className="px-4 py-2">{candidate.current_status}</td>
              <td className="px-4 py-2">
                <button className="" onClick={()=>handleUpdate(candidate.id)}>
                  Update
                </button>
              </td>
              <td className="px-4 py-2">
                <button className="" onClick={()=>handleDelete(candidate.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
