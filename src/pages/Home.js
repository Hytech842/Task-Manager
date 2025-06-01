import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/dark-theme.css";

const Home =   () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <div className="mb-4">
        <h1 className="display-4 fw-bold">📝 TaskFlow</h1>
        <p className="lead">Plan. Track. Accomplish.</p>
      </div>

      <div className="d-flex gap-3">
        <Link to="/tasks" className="btn btn-primary px-4 py-2">
          View Tasks
        </Link>
        {/* <Link to="/settings" className="btn btn-outline-secondary px-4 py-2">
          Settings ⚙️
        </Link> */}
      </div>

      <div className="mt-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9068/9068827.png"
          alt="Task Illustration"
          width="150"
        />
      </div>
    </div>
  );
};

export default Home;
