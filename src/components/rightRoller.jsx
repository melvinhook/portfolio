import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";
export default function rightRoller({ number, status, currentPage }) {
  const [upperLiner, upperLinerApi] = useSpring(() => ({
    from: {
      height: "100%",
    },
    config: {
      mass: 5,
      tension: 150,
      friction: 80,
    },
  }));
  const [container, containerApi] = useSpring(() => ({
    from: {
      marginRight: -10,
      opacity: 0,
    },
    config: {
      mass: 5,
      tension: 150,
      friction: 80,
    },
  }));
  const [bottomLiner, bottomLinerApi] = useSpring(() => ({
    from: {
      height: "0%",
    },
    config: {
      mass: 5,
      tension: 150,
      friction: 80,
    },
  }));
  useEffect(() => {
    if ( currentPage == number) {
      bottomLinerApi.start({
        to: { height: "100%" },
      });
      upperLinerApi.start({
        to: { height: "100%" },
      });
      containerApi.start({
        to: {
          marginRight: 0,
          opacity: 1,
        },
      });
    }else if(currentPage >= number){
      upperLinerApi.start({
        to: { height: "0%" },
      });
      bottomLinerApi.start({
        to: { height: "100%" },
      });
      containerApi.start({
        to: {
          marginRight: -10,
          opacity: 0,
        },
      });
    }else{
      upperLinerApi.start({
        to: { height: "100%" },
      });
      bottomLinerApi.start({
        to: { height: "0%" },
      });
      containerApi.start({
        to: {
          marginRight: -10,
          opacity: 0,
        },
      });
    }
  }, [status, currentPage]);
  return (   
    <section className="h-[100%] w-screen flex flex-row justify-end">
      <animated.div
        style={container}
        className="h-full flex flex-col justify-center p-5 "
      >
        <animated.div
          style={upperLiner}
          className="w-[0.5%] ml-[90%] border border-white"
        ></animated.div>
        <h1 className="text-white mt-3 2xl:text-[15px] xl:text-[12px] lg:text-[10px] md:text-[9px]">{number} ページ</h1>
        <animated.div
          style={bottomLiner}
          className="mt-3 w-[0.5%] ml-[90%] border border-white"
        ></animated.div>
      </animated.div> 
    </section>
  );
}
