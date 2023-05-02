import React from "react";
import Caraousel from "../../components/user/Caraousel";
import Navbaruser from "../../components/user/Navbaruser";
import { PageTittle } from "../../TittleName";

const Home = () => {
  PageTittle("Home");
  return (
    <>
      <Navbaruser />
      <Caraousel />
    </>
  );
};

export default Home;
