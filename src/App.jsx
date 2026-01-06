import "./App.css";
import Section1 from "./components/section1";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
function App() {
  const div4 = useRef(null);
  const [mt, setMt] = useState(300);
  const [lock, setLock] = useState(false);
  const [status, setStatus] = useState("none");
  const [currentPage, setCurrentPage] = useState(0);
  const [doSomething, setDoSomething] = useState(false);
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
    if (!doSomething) return;
    const handleWheel = (e) => {
      if (lock) return;
      setLock(true);
      if (e.deltaY > 0) {
        setMt((prev) => prev - 100);
        setStatus("close");
        setCurrentPage((prev) => prev + 1);
        console.log("down");
      } else {
        setMt((prev) => prev + 100);
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
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
          <Section1
            status={status}
            setStatus={setStatus}
            currentPage={currentPage}
          />
          <div className="h-screen w-screen flex items-center justify-center bg-[#1b1f1e]">
            <div className="h-[40%] w-[40%] border border-white"></div>
          </div>
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
