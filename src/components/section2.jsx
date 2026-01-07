import me from "../assets/Me.jpeg";
import Introduction from "./innerComponents/introduction";
import RightRoller from "./rightRoller";
import "../app.css"; 
import { useSpring, animated } from "@react-spring/web"; 
import { useEffect } from "react";
export default function Section2({ currentPage, status, lock }) {
  const [container, containerApi] = useSpring(() => ({
    from: { marginTop: "20%" }, 
    config: {
      mass: 5,
      tension: 150,
      friction: 80,
    },
  }));
  useEffect(() => {
    if (currentPage === 2 ) {
      containerApi.start({
        marginTop: "0%",
      });
    }
  }, [currentPage, lock]);
  return (
    <div className="h-screen w-screen flex justify-center item-center p-[5%] bg-[#1b1f1e]">
      <RightRoller status={status} number={2} currentPage={currentPage} />
      <animated.div style={container} className="absolute h-full w-[70%] p-[3%] text-white flex flex-row justify-center">
        <Introduction  />
        <div className="h-[35%] w-80 ml-8">
          <img src={me} className="object-cover h-full w-full" alt="" />
        </div>
      </animated.div>
      {/*<RightRoller status={status} number={2} currentPage={currentPage} />*/}
    </div>
  );
}
