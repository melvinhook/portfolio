import me from "../assets/Me.jpeg";
import Introduction from "./innerComponents/introduction";  
import RightRoller from "./rightRoller";
import "../app.css";
export default function Section2({ currentPage, status}) {
  return (
    <div className="h-screen w-screen flex justify-between p-[5%] bg-[#1b1f1e]">
      <div className="h-full w-[20%]"></div>
      <div className="h-full w-[70%] p-[3%] text-white flex flex-row justify-center">
        <Introduction/>
        <div className="h-full w-80 ml-5">
          <img src={me} className="object-cover h-full w-full" alt="" />
        </div>
      </div>
        <RightRoller status={status} number={2} currentPage={currentPage} />
    </div>
  );
}
