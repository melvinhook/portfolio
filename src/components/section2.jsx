import me from "../assets/Me.jpeg";
import Introduction from "./innerComponents/introduction";
import RightRoller from "./rightRoller";
import "../app.css";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
export default function Section2({ currentPage, status, lock }) {
  const [container, containerApi] = useSpring(() => ({
    from: { marginTop: "10%" },
    config: {
      mass: 10,
      tension: 150,
      friction: 80,
    },
  }));
  useEffect(() => {
    if (currentPage === 2) {
      containerApi.start({
        marginTop: "0%",
      });
    }else if(currentPage < 2){
      containerApi.start({
        marginTop: "10%",
      });
    }else{
      containerApi.start({
        marginTop: "-13%",
      });
    }
  }, [currentPage, lock]);
  return (
    <div className="h-screen w-screen flex justify-center item-center p-[5%] bg-[#1b1f1e] ">
      <RightRoller status={status} number={2} currentPage={currentPage} />
      <animated.div
        style={container}
        className="absolute h-[80vh] w-[105vh] p-[3%] text-white flex items-center justify-cente "
      >
        <div className="flex flex-row justify-between h-full">
          <Introduction />
          <div className="h-full w-full ml-[8%]">
            <img src={me} className="object-cover h-full w-full" alt="" />
          </div>
        </div>
      </animated.div>
      {/*<RightRoller status={status} number={2} currentPage={currentPage} />*/} 
      {/*BACKUP CLASS DIV PEMBUNGKUS GAMBAR :*/}
    </div>
  );
}
