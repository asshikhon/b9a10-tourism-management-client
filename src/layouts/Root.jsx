import { Outlet } from "react-router-dom";

import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
