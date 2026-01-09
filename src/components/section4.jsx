import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
function Stuffs({ icon:Icon, name }) {
  const [hover, setHover] = useState("");
  const stuff = useSpring({
    to: {
      height: hover == name? "6vh" : "5vh",
      width: hover == name? "6vh" : "5vh",
    },
  });

  return (
    <animated.div style={stuff} onMouseEnter={()=>setHover(name)} onMouseLeave={()=>setHover("")} className="cursor-pointer">
      <Icon className="h-full w-full" />
    </animated.div>
  );
}

export default function Section4() {
  return (
    <div className="h-screen w-screen bg-[#1b1f1e] flex items-center justify-center">
      <div className="flex flex-row justify-center gap-4 text-white ">
        <Stuffs icon={FaInstagram} name={"instagram"}/>
        <Stuffs icon={CiLinkedin} name={"linkedin"}/>
        <Stuffs icon={FaGithub} name={"github"}/>
      </div>
    </div>
  );
}
