import './App.css';
import { useState, createContext  } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatGPT from './component/Chatgpt';
import ElementCard from './component/ElementCard/ElementCard';
import TemplatesComponent from './component/ColorTemplates/Template';

export const GptContext = createContext();

function App() {

  const [cardData, setCardData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <GptContext.Provider value={{ cardData, setCardData }} >
          <Routes>
            <Route path="/" element={<ChatGPT />} />
            <Route path="/add-card" element={<ElementCard />} />
            <Route path="/all-templates" element={<TemplatesComponent />} />
          </Routes>
        </GptContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
