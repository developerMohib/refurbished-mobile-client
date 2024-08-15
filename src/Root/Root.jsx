import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
