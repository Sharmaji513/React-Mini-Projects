import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


function Background() {
  // State for the background color
  const [backgroundColor, setBackgroundColor] = useState("");



  // Function to change the background color
  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden"> 
      <Navbar/>
      <div className={`flex flex-col items-center justify-end flex-grow`} style={{ backgroundColor }}>
        <div className="flex space-x-2 mb-9 rounded-md border-1 border-black shadow-xl p-2 bg-white">
          <button
            className=" border-2 rounded-md bg-red-500  text-white px-4 py-2"
            onClick={() => changeColor("red")}
          >
            Red
          </button>
          <button
            className="border-2 rounded-md bg-yellow-500 text-white px-4 py-2"
            onClick={() => changeColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="border-2 rounded-md bg-black text-white px-4 py-2"
            onClick={() => changeColor("black")}
          >
            Black
          </button>
          <button
            className="border-2 rounded-md bg-purple-500 text-white px-4 py-2"
            onClick={() => changeColor("purple")}
          >
            Purple
          </button>
          <button
            className="border-2 rounded-md bg-green-500 text-white px-4 py-2"
            onClick={() => changeColor("green")}
          >
            Green
          </button>
          <button
            className="border-2 rounded-md bg-blue-500 text-white px-4 py-2"
            onClick={() => changeColor("blue")}
          >
            Blue
          </button>
          <button
            className="border-2 rounded-md text-black px-4 py-2 bg-white"
            onClick={() => changeColor("white")}
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;
