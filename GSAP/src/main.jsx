import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ScrollTrigger from './pages/GsapScrollTrigger.jsx'
import GsapText from './pages/GsapText.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="Scroll" element={<ScrollTrigger />} />
        <Route path="GsapText" element={<GsapText />} />

        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
