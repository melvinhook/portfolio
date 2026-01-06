import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";
export default function LeftRoller({ status, number, currentPage }) {
  const [upperLiner, upperLinerApi] = useSpring(() => ({
    from: {
      height: "80%",
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
  const [rollerDiv, rollerDivApi] = useSpring(() => ({
    from: {
      marginLeft: 0,
      opacity: 0,
    },
    config: {
      mass: 5,
      tension: 150,
      friction: 80,
    },
  }));
  useEffect(() => {
    if (status === "open" && number == currentPage) {
      upperLinerApi.start({
        to: {
          height: "40%",
        },
      });
      bottomLinerApi.start({
        to: {
          height: "40%",
        },
      });
      rollerDivApi.start({
        to: {
          marginLeft: 10,
          opacity: 1,
        },
      });
    } else if (status === "close" && number != currentPage) {
      upperLinerApi.start({
        to: {
          height: "0%",
        },
      });
      bottomLinerApi.start({
        to: {
          height: "80%",
        },
      });
      rollerDivApi.start({
        to: {
          marginLeft: 0,
          opacity: 0,
        },
      });
    }
  }, [status, number, currentPage]);
  return (
    <>
      <animated.div
        style={rollerDiv}
        className="absolute h-screen text-white flex flex-col justify-center"
      >
        <animated.div
          style={upperLiner}
          className=" w-0.5 border bg-white"
        ></animated.div>
        <h1 className="2xl:mt-5 md:mt-2 2xl:text-[15px] md:text-[10px]">
          {number} ページ
        </h1>
        <animated.div
          style={bottomLiner}
          className=" w-0.5 border bg-white 2xl:mt-5 md:mt-2"
        ></animated.div>
      </animated.div>
    </>
  );
}
