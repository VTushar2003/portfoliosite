import React from "react"
import "/src/App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner.jsx";
import AnimatedText from "./Components/AnimatedText.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";      
import WorkExp from "./Components/WorkExp.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
   

  return(
    <>
    <div>
      <Header/>
      <Banner/>
      <AnimatedText/>
      <About/>
      <Skills/>
      <WorkExp/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App
