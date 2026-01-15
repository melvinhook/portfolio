import "./app.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2"; 
import Section3 from "./components/section3"; 
import Section4 from "./components/section4";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web"; 
function App() {
  const div4 = useRef(null);
  const [mt, setMt] = useState(300);
  const [lock, setLock] = useState(false);
  const [status, setStatus] = useState("none");
  const [currentPage, setCurrentPage] = useState(0);
  const [doSomething, setDoSomething] = useState(false);
  const [scrollIsLocked, setScrollIsLocked] = useState(true);
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
      setCurrentPage(1);
    },
  });
  useEffect(() => {
    if ( scrollIsLocked == false) { 
      console.log("Slide Logic Attempted")
      const handleWheel = (e) => {
        if (lock) return;
        setLock(true);
        if (e.deltaY > 0) {
          setMt((prev) => prev !== 0 ? prev - 100 : prev - 0);
          setStatus("close");
          setCurrentPage((prev) => prev !== 3 ? prev + 1 : prev + 0);
          console.log("down");
        } else {
          setMt((prev) => prev !== 300 ? prev + 100 : prev + 0);
          setCurrentPage((prev) => prev !== 1 ? prev - 1 : prev - 0);
          console.log("up");
        }
        console.log("Current Mt is ", mt);
      };
      window.addEventListener("wheel", handleWheel, { passive: true });
      return () => window.removeEventListener("wheel", handleWheel);
    }
  }, [scrollIsLocked]);
  useEffect(() => {
    if (div4.current) {
      div4.current.scrollIntoView();
      setDoSomething(true);
    }
  }, []); 
  useEffect(()=>{
    if(scrollIsLocked){
      console.log("Scroll is locked")
    }else{
      console.log("Scroll is free")
    }
  },[scrollIsLocked]) 
  useEffect(()=>{console.log("mt now:",mt)},[mt])
  return (
    <>
      <section className="h-[600vh] w-full">
        {currentPage === 0  && (
          <animated.div
            style={pitchBlack}
            className="absolute z-10 mt-[300vh] h-full w-full bg-black"
          />
        )}
        <animated.div style={container} className="absolute">
          <Section1
            status={status}
            setStatus={setStatus}
            currentPage={currentPage} 
            setScrollIsLocked={setScrollIsLocked}
          />
          <Section2 status={status} currentPage={currentPage} lock={lock} /> 
          <Section3/>  
          <Section4/>
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
