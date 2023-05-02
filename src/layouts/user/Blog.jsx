import React from "react";
import Cards from "../../components/user/Cards";
import Navbaruser from "../../components/user/Navbaruser";
import { PageTittle } from "../../TittleName";

const Blog = () => {
  PageTittle("Blog");
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
