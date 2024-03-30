import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-center w-full  mb-5  ">
        <div className="grid-clos-1 w-250 gap-4 justify-center mb-5  bg-blue-200  p-8">
          <Link to={"./profile"} className="  ">
            <h1 className=" text-2xl  font-bold ">Profile Component</h1>
          </Link>
        </div>

        <div className="grid-clos-1 w-250 gap-4 justify-center mb-5 bg-yellow-100  p-8">
          <Link to="/background" className=" mb-4 ">
            <h1 className=" text-2xl  font-bold ">Background changer</h1>
          </Link>
        </div>

        <div className="grid-clos-1 w-250 gap-4 justify-center mb-5  bg-green-200  p-8">
          <Link to="/para-generator" className=" mb-4 ">
            <h1 className=" text-2xl  font-bold ">Paragraph Generator</h1>
          </Link>
        </div>

        <div className="grid-clos-1 w-250 gap-4 justify-center mb-5 bg-orange-200  p-8">
          <Link to="/login" className=" mb-4 ">
            <h1 className=" text-2xl  font-bold ">OTP Login</h1>
          </Link>
        </div>

        <div className="grid-clos-1 w-250 gap-4 justify-center  bg-purple-200  p-8">
          <Link to="/birthday" className=" mb-4 ">
            <h1 className=" text-2xl  font-bold ">Birthday wishes</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
