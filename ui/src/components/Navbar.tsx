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
			<p onClick={toggleSidebar}>{openSidebar ? <MdClose /> : <GiHamburgerMenu />}</p>
			{openSidebar && (
				<div className="absolute right-0 top-7 border bg-slate-100 p-4">
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
	const [showWidget, setShowWidget] = useState<boolean>(false);
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const toggleWidget = () => {
		setShowWidget(!showWidget);
		setIsAuth(false);
	};

	return (
		<header className="sticky top-0 z-10 bg-amber-300 shadow-md">
			<div className="mx-auto flex h-full max-w-screen-xl items-center justify-between lg:items-stretch">
				<Link to="/">
					<img src={logo} className="w-1/4 cursor-pointer lg:w-1/12" />
				</Link>
				<Sidebar />
				<ul className="hidden w-1/4 items-center justify-evenly gap-2 lg:flex">
					<li className="cursor-pointer select-none font-medium hover:text-white">
						<Link to="/products">Products</Link>
					</li>
					<li
						onMouseEnter={toggleWidget}
						onMouseLeave={toggleWidget}
						className="relative flex h-full flex-col items-center"
					>
						<BsPersonFill size="2rem" className="h-full cursor-pointer group-hover/user:text-green-700" />
						<div className="relative w-full">
							{showWidget ? (
								isAuth ? (
									<div className="absolute -left-5 top-0 rounded-md bg-slate-100 p-4 py-2" onClick={toggleWidget}>
										<p className="mt-2">
											<Link to="/account">Account</Link>
										</p>
										<p className="mt-2">
											<Link to="/orders">Orders</Link>
										</p>
										<p className="mt-2">
											<Link to="/login">Logout</Link>
										</p>
									</div>
								) : (
									<div className="absolute -left-5 top-0 w-max rounded-md bg-slate-100 p-4 py-2" onClick={toggleWidget}>
										<p className="mt-2">
											<Link to="/login">Login</Link>
										</p>
										<p className="mt-2">
											<Link to="/signup">Create Account </Link>
										</p>
									</div>
								)
							) : (
								""
							)}
						</div>
					</li>
					<li>
						<BsCart3 size="1.5rem" className="cursor-pointer" />{" "}
					</li>
				</ul>
			</div>
		</header>
	);
}
