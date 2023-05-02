import React from "react";
import { useSelector } from "react-redux";
import { PageTittle } from "../../TittleName";

const Dashboard = () => {
  const { UserBlog } = useSelector((state) => state.authLogin);
  PageTittle("Dashboard");

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100"
      style={{ height: "90vh" }}
    >
      <h2>Welcome to Dashboard</h2>
      <h2>{UserBlog && UserBlog.first_name} </h2>
    </div>
  );
};

export default Dashboard;
