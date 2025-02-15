import "./App.css"; 
import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;





