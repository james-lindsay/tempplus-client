import axios from "axios";
import { useEffect, useState } from "react";
import JobListing from "../../Components/JobListing/JobListing";
import { Link } from "react-router-dom";
import "./JobListingsPage.scss";

const JobListingsPage = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/jobs`);
        console.log(data);
        setJobData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);
  return (
    <div className="job">
      {jobData.map((job) => {
        return (
          <Link to={`/jobs/${job.id}`}>
            <JobListing
              id={job.id}
              title={job.title}
              location={job.location}
              description={job.description}
              salary={job.salary}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default JobListingsPage;
