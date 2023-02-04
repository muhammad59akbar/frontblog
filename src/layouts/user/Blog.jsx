import React from "react";
import Cards from "../../components/user/Cards";
import Navbaruser from "../../components/user/Navbaruser";

const Blog = () => {
  return (
    <>
      <Navbaruser />
      <div className="myBlog">
        <Cards />
      </div>
    </>
  );
};

export default Blog;
