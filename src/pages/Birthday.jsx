import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "../components/Navbar";

function Birthday() {
    const [name, setName] = useState('');
    const [generatedCards, setGeneratedCards] = useState([]);
   
    const wishes = [
        `Happy Birthday, ${name}! May your day be filled with joy and celebration.`,
        `Wishing you a fantastic birthday, ${name}! May all your dreams come true.`,
        `Cheers to another year of amazing adventures, ${name}! Happy Birthday!`,
        `On your special day, ${name}, may you be surrounded by love and happiness.`,
        `Sending you warmest wishes on your birthday, ${name}! May this year be the best one yet.`,
        `Happy Birthday, ${name}! May each moment of your day be filled with love and laughter.`,
        `Wishing you a year ahead filled with exciting opportunities and beautiful moments, ${name}!`,
        `May this birthday bring you closer to your dreams, ${name}! Celebrate and enjoy every moment.`,
        `Happy Birthday, ${name}! May the coming year be filled with success, joy, and unforgettable moments.`,
        `Sending you lots of positive vibes on your birthday, ${name}! May this year be a remarkable chapter in your life.`
    ];
    
    const generateCard = () => {
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        const newCard = (
            <div key={generatedCards.length} className="w-250 text-white bg-gradient-to-l hover:bg-gradient-to-r  from-sky-500 to-indigo-500 rounded-md border-2 border-black shadow-sm  p-4 mb-4 block  font-bold">
                <p>{randomWish}</p>
            </div>
        );
        setGeneratedCards([...generatedCards, newCard]);
    }
    
    const handleNameInput = (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            toast.error('Please enter a name');
        } else {
            generateCard();
        }
    }
    
    return (
        <div >
            <Navbar />
            <div className="flex flex-col justify-center items-center h-96">
                <div className="bg-white border rounded-md shadow-md w-96 p-6 flex flex-col justify-center items-center">
                    <h1 className="text-center text-2xl font-bold mb-4">Birthday Card Generator</h1>
                    <form onSubmit={handleNameInput}>
                    
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Your Name"
                            className="text-center border-2 border-gray-300 rounded-md p-2 m-2 w-80"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 w-48"
                            >
                                Generate card
                            </button>
                        </div>                        
                    </form>
                   
                    
                    <ToastContainer position='bottom-right' />
                </div>
                
            </div>
            <div className=" m-5 grid grid-cols-3 gap-2">
                {generatedCards.map(card => card)}
            </div>
        </div>
    );
}

export default Birthday;
