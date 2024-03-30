import React, { useState } from "react";
import Navbar from "../components/Navbar";


function ParaGenerator() {
  const [numWords, setNumWords] = useState('');
  const [generateType, setGenerateType] = useState("");
  const [text, setText] = useState("");

  const handleNumWordsChange = (e) => {
    setNumWords(e.target.value);
  };

  const handleGenerateTypeChange = (e) => {
    setGenerateType(e.target.value);
  };

  const getWord = () => {
    let chars = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'];

    let word = '';

    for (let i = 0; i < Math.floor(Math.random() * 10) + 2; ++i) {
      word += chars[Math.floor(Math.random() * 26)];
    }
    return word;
  };

  const generateWords = (count) => {
    let words = '';

    for (let i = 0; i < count; i++) {
      words += i === count - 1 ? getWord() : getWord() + " ";
    }

    return words;
  };

  const generateSentence = (count) => {
    let sentence = '';

    for (let i = 0; i < count; i++) {
      sentence += " " + generateWords(Math.floor(Math.random() * 10) + 3) + ".";
    }

    return sentence;
  };

  const generateParagraph = (count) => {
    let paragraphs = '';

    for (let i = 0; i < count; i++) {
      paragraphs += generateSentence(Math.floor(Math.random() * 10) + 2);
      paragraphs += '\n\n';
    }

    return paragraphs;
  };

  const generateLoremIpsum = () => {
  
    let generatedText = "";

    if (generateType === "paragraphs") {
      generatedText = generateParagraph(numWords);
    } else if (generateType === "sentences") {
      generatedText = generateSentence(numWords);
    } else if (generateType === "words") {
      generatedText = generateWords(numWords);
    }

    setText(generatedText);
  };

  return (
    <div>
      <Navbar/>
      <div className="flex flex-col justify-center items-center ">        
        <h1 className="text-xl font-bold m-7 ">Text Generator</h1>
        <div className=" flex flex-col items-center  w-3/4 p-2 ">
        <div className="flex flex-row  "> 
          <input
            type="number"
            placeholder="Enter Number"
            value={numWords}
            onChange={handleNumWordsChange}
            className="justify-center text-center border-2 border-gray-300 rounded-md p-2 mr-1 w-3/4"
          />
          <select
            value={generateType}
            onChange={handleGenerateTypeChange}
            className="border-2 border-gray-300 rounded-md p-2 mr-1"
            
          >
            <option value="">Select Generator</option>
            <option value="words">Words</option>
            <option value="sentences">Sentences</option>
            <option value="paragraphs">Paragraphs</option>
          </select>
          <button
            onClick={generateLoremIpsum}
            className="bg-blue-500 text-white p-1 rounded-md"
          >
            Generate
          </button>
          </div>
        </div>
          <div className={`mt-4 w-5/6 p-2 ${text ? 'border border-gray-500 rounded-md' : ''} max-h-[29rem] overflow-auto `}>
            <pre className="text-gray-700 whitespace-pre-wrap ">{text}</pre>
          </div>
        
      </div>
    </div>    
  );
}

export default ParaGenerator;
