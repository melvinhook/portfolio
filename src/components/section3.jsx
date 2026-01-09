import { useSpring, animated } from "@react-spring/web";
import { useQuery } from "@tanstack/react-query";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import store from "../store/store";
import Idx from "./innerComponents/idk"; 
import controller from "../store/controller";
import { useEffect } from "react";
export default function Section3() { 
  const {curtain, pos, setCurtain, setPos, transition, setTransition} = controller()
  const { fetch, index , setIndex} = store(); 
  const cld = new Cloudinary({
    cloud: {
      cloudName: "djc9b1vm0",
    },
  }); 
  const { data, isLoading, isError } = useQuery({
    queryKey: ["project"],
    queryFn: () => fetch(),
  });    
  const dataSwitch = () => {
    if(pos){
      if (data) setIndex((index + 1) % data.length)
    }else{ 
      if (data) setIndex((index - 1 + data.length) % data.length)
    }
  }
  const container = useSpring({
    to: { opacity: curtain && !transition && data[index].video ? 1 : 0.8 }, 
    onRest: ()=>{ 
      if(!transition){ 
          setTransition(true)
          dataSwitch()
      }else{
          setTransition(false)
      }
    }
  });
  const myVideo = cld.video(data?.[index]?.video);   
  useEffect(()=>{
    setCurtain(false)
  },[index])
  if (isLoading) return <div className="text-white">Loading Projects...</div>;
  if (isError || !data)
    return <div className="text-white">Error loading data.</div>;
  return (
    <div className="h-screen w-screen"> 
      <animated.div
        style={container}
        className="absolute h-screen w-screen flex items-center justify-center bg-[#1b1f1e] "
      ></animated.div>
      <div className="absolute z-10 h-screen w-screen flex items-center justify-center">
        <div className="h-[70vh] w-[100vh] flex items-center justify-center">
          <Idx/>
        </div>
      </div>
      <AdvancedVideo
        cldVid={myVideo}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></AdvancedVideo>
    </div>
  );
}
