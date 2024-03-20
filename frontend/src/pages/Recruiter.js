import React, { useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";
import { UrlConstant } from "../Urlconstant";
import { useNavigate } from "react-router-dom";

function Recruiter() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const getCandidate = async () => {
    try {
      const response = await axios.get(UrlConstant.getCandidates);
      setRecords(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCandidate();
  }, []);
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${UrlConstant.getCandidateById}${id}`
      );
      getCandidate();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <List
        data={records}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default Recruiter;
