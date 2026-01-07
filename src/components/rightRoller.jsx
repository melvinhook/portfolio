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
      marginLeft: "10%",
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
    if (status === "open" && currentPage == number) {
      bottomLinerApi.start({
        to: { height: "100%" },
      });
      containerApi.start({
        to: {
          marginLeft: '0%',
          opacity: 1,
        },
      });
    }
  }, [status, currentPage]);
  return (
    <animated.div
      style={container}
      className="h-full  flex flex-col justify-center p-5"
    >
      <animated.div
        style={upperLiner}
        className="w-[0.5%] ml-[90%] border border-white"
      ></animated.div>
      <h1 className="text-white mt-3">{number} ページ</h1>
      <animated.div
        style={bottomLiner}
        className="mt-3 w-[0.5%] ml-[90%] border border-white"
      ></animated.div>
    </animated.div>
  );
}
