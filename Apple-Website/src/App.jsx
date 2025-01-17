import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Hero from "./components/Hero"
import Model from "./components/Model"
import * as Sentry from '@sentry/react';
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks";


const App=() => {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>; 
  return (
   <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
   </main>
  )
}

export default Sentry.withProfiler (App)
