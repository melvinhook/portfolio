import "./App.css";
import bg from "./assets/Fuji.jpg"; 
import { useRef, useEffect, useState} from "react";  
import { useSpring, animated } from "@react-spring/web";
function App() { 
  const div4 = useRef(null)   
  const [mt,setMt] = useState(300)
  const container = useSpring({
    to:{
      marginTop: `${mt}vh`
    }
  })    
  const pitchBlack = useSpring({
    from:{
      opacity: 1
    }, 
    to:{
      opacity: 0
    }
  }) 
  useEffect(()=>{
    if (div4.current) {
      div4.current.scrollIntoView();
    }
  },[])
  return (
    <>
      <section className="h-[600vh] w-full"> 
        <animated.div style={pitchBlack} className="absolute z-10 h-[600vh] w-full bg-black"></animated.div>
        <div className="h-screen w-full mt-[300vh] absolute">
          <div className="absolute h-screen text-white flex flex-col justify-center ml-5">
            <div className="2xl:h-80 xl:h-60 lg:h-60 md:h-50 w-0.5 border bg-white"></div>
            <h1 className="mt-5">1 ページ</h1>
            <div className="2xl:h-80 xl:h-60 lg:h-60 md:h-50 w-0.5 border bg-white mt-5"></div>
          </div>
          <div className="absolute z-10 h-full w-full flex items-center justify-center text-white text-[25px] text-center">
            <div>
              <p>
                阿<br/>久<br/>世<br/>流
              </p>
              <div className="border border-white w-15 bg-white mt-[5%]"></div>
              <p className="text-[15px]">Axel</p>
            </div>
          </div>
          <img src={bg} className="h-full w-full object-cover" />
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-1
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-2
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-3
        </div>
        <div ref={div4} className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-4
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-5
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-6
        </div>
      </section>
    </>
  );
}

export default App;
