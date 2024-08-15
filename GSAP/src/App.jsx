import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
gsap.registerPlugin(useGSAP);



function App() {
  const [count, setCount] = useState(0)
  useGSAP(() => {
    gsap.fromTo('#red-box', {
      x: 0,
      rotation: 0,
      borderRadius: "0%"
    }, {
      x: 250,
      repeat: -1,
      yoyo: true,
      borderRadius: '100%',
      rotation: 360,
      duration: 2,
      ease: 'bounce.out'
    })
  }, []);



  return (

    <>
      <main className='bg-black w-screen '>
        <div id="red-box" className="bg-red-600 w-20 h-20"></div>
        <div>
          <button onClick={() => { }}>Play/Pause</button>
          <div id="yellow-box" className="bg-yellow-500 w-20 h-20"></div>
        </div>
      </main>

      <div className="">123</div>
    </>
  )
}

export default App
