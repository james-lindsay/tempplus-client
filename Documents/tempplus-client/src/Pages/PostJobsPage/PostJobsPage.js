import React, { useState } from "react";
import "./PostJobsPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostJobsPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [desc, setDesc] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: jobTitle,
      location: jobLocation,
      description: jobDescription,
      salary: salary,
      desc: desc,
      company: company,
    };
    try {
      await axios.post(`http://localhost:8080/api/jobs`, body);
      console.log("Job posted Successfully");
    } catch (error) {
      console.error(error);
    }
    setJobTitle("");
    setJobLocation("");
    setJobDescription("");
    setSalary("");
    setDesc("");
    setCompany("");

    navigate("/");
  };

  return (
    <div className="job__form">
      <h2>Post a Job</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Company
          <textarea
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Salary
          <textarea
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </label>
        <label>
          Give More Details
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </label>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJobsPage;
