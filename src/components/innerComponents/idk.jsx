import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSpring, animated } from "@react-spring/web";  

import { useQuery } from "@tanstack/react-query";
import { useState } from "react"; 
import store from "../../store/store";
export default function Idx({}) {
  const {index, setIndex} = store()
  const [hover, setHover] = useState(false); 
  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: () => fetch(),
  });
  const handleNext = () => {
    if (data) setIndex((index + 1) % data.length);
  };
  const handleBack = () => {
    if (data) setIndex((index - 1 + data.length) % data.length);
  }; 

  const hovers = useSpring({
    to: {
      marginLeft: hover ? "0vh" : "15vh",
      opacity: hover ? 1 : 0,
      width: hover ? "30vh" : "0vh",
    },
  });
  const visitSite = useSpring({
    to: {
      opacity: hover ? 1 : 0,
      marginTop: hover ? 0 : -5,
    },
  }); 



  return (
    <div className="w-[100vh] flex flex-row justify-between text-white text-[30px] e">
      <div className="h-[75vh] flex flex-col justify-center">
        <IoIosArrowBack onClick={() => handleBack()} />
      </div>
      <div className="h-[75vh] w-[100vh] ">
        <div className="h-[75vh] w-[95vh] absolute flex justify-center items-center ">
          <div
            className="cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <h1 className="text-center font-bold text-[25px]">
              {data[index]?.title}
            </h1>
            <div className="w-[95vh] flex flex-row justify-center">
              <div>
                <p className="w-[30vh] text-center text-[20px]">
                  {data[index]?.desc}
                </p>
                <animated.div style={hovers} className="mt-1"></animated.div>
                <animated.p
                  style={visitSite}
                  className="text-center text-[20px]"
                >
                  Visit Site
                </animated.p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-[25px]">
          {data[index]?.type}
        </h1>
      </div>
      <div className="h-[75vh] flex flex-col justify-center">
        <IoIosArrowForward onClick={() => handleNext()} />
      </div>
    </div>
  );
}
