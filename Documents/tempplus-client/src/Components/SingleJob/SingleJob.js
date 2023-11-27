import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SingleJob.scss";

const SingleJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/jobs/${id}`
        );
        setJobData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getJobs();
  }, [id]);
  return (
    <div className="single-job">
      <h2 className="single-job__title">{jobData.title}</h2>
      <p className="single-job__location">{jobData.location}</p>
      <p className="single-job__salary">${jobData.salary} Per Day</p>
      <p className="single-job__description">{jobData.desc}</p>
      <Link to="/">
        <button className="single-job__button">Apply</button>
      </Link>
    </div>
  );
};

export default SingleJob;
