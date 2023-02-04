import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Masterlayout from "./layouts/admin/Masterlayout";
import MasterLogin from "./layouts/admin/MasterLogin";
import Blog from "./layouts/user/Blog";
import Home from "./layouts/user/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" name="home" element={<Home />} />
        <Route path="/Blog" name="blog" element={<Blog />} />

        <Route path="/auth/mdprologin" name="login" element={<MasterLogin />} />
        <Route
          path="/mdproadmin/*"
          name="mdproadmin"
          element={<Masterlayout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
