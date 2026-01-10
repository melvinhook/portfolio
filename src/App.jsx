import "./App.css";
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

  const MIN_MT = 300;
  const MAX_MT = 600;
  const STEP = 100;

  const handleWheel = (e) => {
    if (lock) return;

    setMt((prev) => {
      let next = prev;

      if (e.deltaY > 0) {
        // scroll down
        if (prev >= MAX_MT) return prev; // STOP
        next = prev + STEP;
        setCurrentPage((p) => p + 1);
        setStatus("close");
      } else {
        // scroll up
        if (prev <= MIN_MT) return prev; // STOP
        next = prev - STEP;
        setCurrentPage((p) => (p > 0 ? p - 1 : 0));
      }

      setLock(true); // lock ONLY if movement happens
      return next;
    });
  };

useEffect(() => {
  if (scrollIsLocked) return;

  window.addEventListener("wheel", handleWheel, { passive: true });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [scrollIsLocked, lock]);
  useEffect(() => {
    if (div4.current) {
      div4.current.scrollIntoView();
      setDoSomething(true);
    }
  }, []);
  useEffect(() => {
    if (scrollIsLocked) {
      console.log("Scroll is locked");
    } else {
      console.log("Scroll is free");
    }
  }, [scrollIsLocked]);
  return (
    <>
      <section className="h-[600vh] w-full">
        {currentPage === 0 && (
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
          <Section3 />
          <Section4 />
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
