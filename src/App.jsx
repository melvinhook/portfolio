import "./App.css";
import bg from "./assets/Fuji.jpg";
function App() {
  return (
    <>
      <div className="h-full w-full">
        <div className="absolute h-screen text-white flex flex-col justify-center ml-5">
            <div className="h-80 w-0.5 border bg-white"></div>
            <h1 className="mt-5">1 ページ</h1>
            <div className="h-80 w-0.5 border bg-white mt-5"></div>
        </div>
        <div className="absolute z-10 h-full w-full flex items-center justify-center text-white text-[25px] text-center">
          <div>
            <p>
              阿<br />久<br />世<br />流
            </p>
            <div className="border border-white w-15 bg-white mt-[5%]"></div>
            <p className="text-[15px]">Axel</p>
          </div>
        </div>
        <img src={bg} className="h-full w-full object-cover" />
      </div>
    </>
  );
}

export default App;
