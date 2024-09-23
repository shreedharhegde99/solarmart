import { useState } from "react";
import logo from "../assets/solar.svg";
import { BsPersonFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className="relative p-2 lg:hidden">
      <p onClick={toggleSidebar}>
        {openSidebar ? <MdClose /> : <GiHamburgerMenu />}
      </p>
      {openSidebar && (
        <div className="absolute right-0 top-7 border p-4">
          <p>Account</p>
          <p>Orders</p>
          <p>Logout</p>
          <p>Support</p>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [showAuthWidget, setshowAuthWidget] = useState(false);
  const toggleWidget = () => {
    setshowAuthWidget(!showAuthWidget);
  };
  return (
    <header className="sticky top-0 z-10 bg-amber-300 shadow-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link to="/">
          <img src={logo} className="w-1/12 cursor-pointer" />
        </Link>
        <Sidebar />
        <ul className="hidden h-full w-1/5 items-center justify-evenly gap-2 lg:flex">
          <li className="cursor-pointer select-none font-medium hover:text-white">
            <Link to="/products">Products</Link>
          </li>
          <li
            onClick={toggleWidget}
            className="relative flex h-full items-center"
          >
            <BsPersonFill
              size="2rem"
              className="cursor-pointer group-hover/user:text-green-700"
            />
            {showAuthWidget && (
              <div
                className="absolute -left-full right-1/3 top-10 w-max bg-red-300 p-4"
                onClick={toggleWidget}
              >
                <p>
                  <Link to="/login">Login</Link>
                </p>
                <p>
                  <Link to="/signup">Create Account</Link>
                </p>
              </div>
            )}
          </li>
          <li>
            <BsCart3 size="1.5rem" className="cursor-pointer" />{" "}
          </li>
          <li></li>
        </ul>
      </div>
    </header>
  );
}
