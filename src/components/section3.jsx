import bgvid from "../assets/bgvid.mp4";
export default function Section3() {
  return (
    <div className="h-screen w-screen "> 
      <div className="absolute h-screen w-screen flex items-center justify-center bg-[#1b1f1e] p-5 opacity-[80%]"></div>
      <video controls width="750" height="500" className="h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
