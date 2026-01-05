import "./App.css";
import bg from "./assets/Fuji.jpg";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated, a } from "@react-spring/web";
function App() {
  const div4 = useRef(null);
  const [mt, setMt] = useState(300);
  const [doSomething, setDoSomething] = useState(false);
  const [lock, setLock] = useState(false); 
  const [title,titleApi] = useSpring(()=>({
    from:{
      opacity:0
    }, 
  }))   
  const [upperLiner,upperLinerApi] = useState(()=>({
    from:{
      
    }
  }))
  
  const container = useSpring({
    to: {
      marginTop: `${mt}vh`,
    },
    onRest: () => {
      setLock(false);
    },
    config: {
      mass: 15,
      tension: 65,
      friction: 50,
    },
  });
  const pitchBlack = useSpring({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
    config: {
      mass: 15,
      tension: 65,
      friction: 50,
    }, 
    onRest:()=>{
      titleApi.start({
        to:{opacity:1}
      })
    }
  });
  useEffect(() => {
    if (!doSomething) return;
    const handleWheel = (e) => {
      if (lock) return;
      setLock(true);
      if (e.deltaY > 0) {
        setMt((prev) => prev - 100);
        console.log("down");
      } else {
        setMt((prev) => prev + 100);
        console.log("up");
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [doSomething, lock]);
  useEffect(() => {
    if (div4.current) {
      div4.current.scrollIntoView();
      setDoSomething(true);
    }
  }, []);
  return (
    <>
      <section className="h-[600vh] w-full">
        <animated.div
          style={pitchBlack}
          className="absolute z-10 h-[600vh] w-full bg-black"
        ></animated.div>
        <animated.div style={container} className="absolute">
          <div className="h-screen w-screen">
            <div className="absolute h-screen text-white flex flex-col justify-center ml-5">
              <div className="h-[40%] w-0.5 border bg-white"></div>
              <h1 className="mt-5">1 ページ</h1>
              <div className="h-[40%] w-0.5 border bg-white mt-5"></div>
            </div>
            <animated.div style={title} className="absolute  h-screen w-screen flex items-center justify-center text-white text-[25px] text-center">
              <div>
                <p>
                  阿<br />久<br />世<br />流
                </p>
                <div className="border border-white w-15 bg-white mt-[5%]"></div>
                <p className="text-[15px]">Axel</p>
              </div>
            </animated.div>
            <img src={bg} className="h-full w-full object-cover" />
          </div>
          <div className="h-screen w-screen bg-[#1b1f1e]"></div>
        </animated.div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-1
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-2
        </div>
        <div className="h-screen w-screen flex items-center justify-center italic border">
          FREE-DIV-3
        </div>
        <div
          ref={div4}
          className="h-screen w-screen flex items-center justify-center italic border"
        >
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
