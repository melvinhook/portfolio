import { animated, useSpring } from "@react-spring/web"; 
import { useEffect, useState } from "react";
export default function Introduction() {   
  const[hover,setHover]=useState("")
  const experience = useSpring({
    to:{color: hover === "experience"? "#0BFF00" : "#FFFFFF" }
  }) 
  const mainWork = useSpring({
    to:{color: hover === "mainWork"? "#cc02ffff" : "#FFFFFF"}
  }) 
  const useless = useSpring({
    to:{opacity: hover === "mainWork"? 0.5 : 1}
  }) 
  return (
    <p className="w-100  text-[15px]">
      <span className="text-[25px] font-bold">I'm</span>
      <span className="text-[30px] italic"> Axel</span>
      <br />
      <br />
      <span className="underline font-bold">
        "Extensible and lazy skills but quiet with depression caution"
      </span>
      kind of <span className="font-bold">Software Engineer</span>. I have
      <animated.span style={experience} className="cursor-pointer" onMouseEnter={()=>setHover("experience")} onMouseLeave={()=>setHover("")}> 4 Years of experience</animated.span> in app
      development, elementary public level such as <animated.span style={experience} className="cursor-pointer" onMouseEnter={()=>setHover("experience")} onMouseLeave={()=>setHover("")}>data management, API
      spreadout, deployment, and few ai generation </animated.span>. <animated.span className={"cursor-pointer"} style={mainWork} onMouseEnter={()=>setHover("mainWork")} onMouseLeave={()=>setHover("")}>Main work deployment</animated.span> is on
      <animated.span className={"cursor-pointer"} style={mainWork} onMouseEnter={()=>setHover("mainWork")} onMouseLeave={()=>setHover("")}> JP Soundworks</animated.span>, <animated.span style={useless}>bounce with certain of Visual Art Student. The basic
      project that has been created, after breathing in the twilight air,
      watching the sun go down at the end of the day with increasing temperature
      levels, is an RPG project with an anime character named "Joana". Tired and
      sweaty at the end of the day, my hand held an object that has long
      historical value in the world of computers, called a "Mouse". I stare at
      the light of the notebook that happily serves my introverted no life every
      day. I introduce you to my friend called Lenovo Yoga. On the screen there
      is a window that is opening RPG Maker along with 2 folders and a discord
      containing great people who never hesitate to give me assignments with
      tight deadlines. I worked and worked until I produced</animated.span><animated.span className={"cursor-pointer"} style={mainWork} onMouseEnter={()=>setHover("mainWork")} onMouseLeave={()=>setHover("")}>"Joana Adventure".</animated.span>
    </p>
  );
}
