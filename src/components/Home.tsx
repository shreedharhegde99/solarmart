import { useState } from "react";

export default function Home() {
  const [trans, setTrans] = useState(0);
  const transChange = (val: number) => {
    console.log("DEBUG", trans);
    if (trans < -1500) {
      setTrans(0);
      return;
    }
    if (val === 1) {
      setTrans(trans + 320);
    } else setTrans(trans - 320);
  };
  return (
    <div>
      <div className="flex h-96 items-center justify-center">
        <h1>
          Welcome to <span className="text-2xl text-red-500"> Solarmart</span>
        </h1>
      </div>
      <div className="relative w-screen overflow-hidden">
        <div
          className="flex max-h-60 transition-all"
          style={{ translate: `${trans}px` }}
        >
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759"
            alt="Nature Image 1"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1581320546201-b4d2d0d3c450"
            alt="City Image 2"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1549924231-f129b911e442"
            alt="Mountain Image 3"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1534237712850-011cbb823d52"
            alt="Beach Image 4"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Forest Image 5"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c"
            alt="Sky Image 6"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
            alt="Ocean Image 7"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="Sunset Image 8"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
            alt="Desert Image 9"
          />
          <img
            className="w-80"
            src="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d1"
            alt="Winter Image 10"
          />
        </div>
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-between px-2">
          <button
            className="h-10 w-10 rounded-full border bg-slate-100/35 text-xl"
            onClick={() => transChange(0)}
          >
            {"<"}{" "}
          </button>
          <button
            className="h-10 w-10 rounded-full border bg-slate-100/35 text-xl"
            onClick={() => transChange(1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
