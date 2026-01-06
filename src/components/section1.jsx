import bg from "../assets/Fuji.jpg";
import LeftRoller from "../components/leftRoller";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
export default function Section1({ status, setStatus, currentPage }) {
  const [title, titleApi] = useSpring(() => ({
    from: {
      marginTop: 0,
      opacity: 0,
    },
  }));
  {
    /*TAGGED*/
  }
  useEffect(() => {
    console.log("Current page:", currentPage);
    if (currentPage === 1) {
      titleApi.start({
        to: { opacity: 1, marginTop: 0 },
        config: {
          mass: 15,
          tension: 65,
          friction: 50,
        },  
        onRest: ()=>{
            setStatus("open")
        }
      });
    }
    if (currentPage === 2) { 
      console.log("Status:",status)
      titleApi.start({
        to: { opacity: 0, marginTop: -50 },
        config: {
          mass: 5,
          tension: 70,
          friction: 30,
        },
      });
    }
  }, [titleApi, currentPage]);
  {
    /*TAGGED*/
  }
  return (
    <div className="h-screen w-screen">
      <LeftRoller status={status} currentPage={currentPage} number={1} />
      <animated.div
        style={title}
        className="absolute h-screen w-screen flex items-center justify-center text-white 2xl:text-[25px] lg:text-[20px] text-center"
      >
        <div>
          <p>
            阿<br />久<br />世<br />流
          </p>
          <div className="border border-white w-15 bg-white mt-[5%]"></div>
          <p className="2xl:text-[15px] md:text-[10px]">Axel</p>
        </div>
      </animated.div>
      <img src={bg} className="h-full w-full object-cover" />
    </div>
  );
}
