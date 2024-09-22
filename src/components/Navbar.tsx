import logo from "../assets/solar.svg";
import { BsPersonFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="shadow-md sticky top-0 bg-amber-300">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <img src={logo} className="w-1/12 cursor-pointer" />
        <ul className="flex gap-2 items-center w-1/5 justify-evenly">
          <li className="cursor-pointer  select-none">Products</li>
          <li>
            <BsPersonFill size="2rem" className="cursor-pointer" />
          </li>
          <li>
            <BsCart3 size="1.5rem" className="cursor-pointer" />{" "}
          </li>
          {/* <div className="flex gap-2 items-center">
          </div> */}
        </ul>
      </div>
    </header>
  );
}
