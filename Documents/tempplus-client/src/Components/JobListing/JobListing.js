import React from "react";
import "./JobListing.scss";

const JobListing = ({ title, location, description, salary, id }) => {
  return (
    <div className="job__listing">
      <h2>{title}</h2>
      <p>
        <strong>Location:</strong>
        {location}
      </p>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
      <p>
        <strong>Salary:</strong>${salary} Per Day
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobListing;
