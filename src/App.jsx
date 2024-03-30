import { useState } from "react";


import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Profile from "./pages/Profile";
import Background from "./pages/Background";
import ParaGenerator from "./pages/ParaGenerator";
import Birthday from "./pages/Birthday";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/background' element={<Background/>}/>
        <Route path='/para-generator' element={<ParaGenerator/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/login' element={<Login/>}/>



      </Routes>
    </>
  );
}

export default App;
