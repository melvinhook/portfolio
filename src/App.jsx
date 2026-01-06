import "./App.css";
import bg from "./assets/Fuji.jpg"; 
import LeftRoller from "./components/leftRoller";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
function App() {
  const div4 = useRef(null);  
  const [mt, setMt] = useState(300); 
  const [lock, setLock] = useState(false); 
  const [status, setStatus] = useState("none")   
  const [currentPage, setCurrentPage] = useState(1)
  const [doSomething, setDoSomething] = useState(false);
  const [title, titleApi] = useSpring(() => ({
    from: { 
      marginTop:0,
      opacity: 0,
    },
  }));
  const container = useSpring({
    to: {
      marginTop: `${mt}vh`,
    },
    onRest: () => {
      setLock(false);
    },
    config: {
      mass: 25,
      tension: 65,
      friction: 65,
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
    onRest: () => {
      titleApi.start({
        to: { opacity: 1 },
        onRest: () => {
          setStatus("open")
        },
      });
    },
  });
  useEffect(() => {
    if (!doSomething) return;
    const handleWheel = (e) => {
      if (lock) return;
      setLock(true);
      if (e.deltaY > 0) {
        setMt((prev) => prev - 100);   
        setStatus("close")
        if(currentPage > 0){
          setCurrentPage((prev)=>prev-1)
        }
        console.log("down");
      } else {
        setMt((prev) => prev + 100); 
        setCurrentPage((prev)=>prev+1)
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
            <LeftRoller status={status} currentPage={currentPage} number={1}/>
            <animated.div
              style={title}
              className="absolute h-screen w-screen flex items-center justify-center text-white 2xl:text-[25px] lg:text-[20px] text-center">
              <div>
                <p>
                  阿<br/>久<br/>世<br/>流
                </p>
                <div className="border border-white w-15 bg-white mt-[5%]"></div>
                <p className="2xl:text-[15px] md:text-[10px]">Axel</p>
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
