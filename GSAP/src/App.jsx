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

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
  });

  useGSAP(() => {
    timeline.to('#yellow-box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: "back.inOut"
    })


    timeline.to('#yellow-box', {
      x: 500,
      scale: 2,
      rotation: 360,
      borderRadius: '8px',
      duration: 2,
      ease: 'back.inOut'
    })
  }, []);

  useGSAP(()=>{
    gsap.to('.stagger-box', {
      y:250,
      rotation: 360,
      borderRadius: '100%',
      repeat: -1,
      width: '150',
      yoyo: true,
      stagger:{
        amount: 1.5,
        grid: [2,1],
        axis: 'y',
        ease: 'circ.inOut',
        from: 'center'
      }
    })
  }, []);


  return (

    <>
      <div className='bg-black w-screen '>
        <div id="red-box" className="bg-red-600 w-20 h-20"></div>
        <div>
          <button onClick={() => { 
            if(timeline.paused()){
              timeline.play();
            }else{
              timeline.pause();
            }
          }}>Play/Pause</button>
          <div id="yellow-box" className="bg-yellow-500 w-20 h-20 rounded-lg"></div>
        </div>

        <div className="flex gap-5">
          <div className="w-20 h-40 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-40 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-40 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-40 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-40 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-40 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-40 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
      <button><a href="/Scroll">Scroll Trigger</a></button>
      <button><a href="/GsapText">GSAP Text</a></button>

    </>
  )
}

export default App
