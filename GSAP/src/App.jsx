import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

function App() {
  const [count, setCount] = useState(0)
  useGSAP(()=>{
    gsap.from()
  })
  

  return (
    <>
      <div id = "red-box" className="bg-red-600 w-20 h-20"></div>    
    </>
  )
}

export default App
