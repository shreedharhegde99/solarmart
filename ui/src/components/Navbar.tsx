import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sun, ShoppingCart, Menu, User } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavItems = () => (
	<>
		<Link className="hover:text-primary text-sm font-medium" to="/products">
			Products
		</Link>

		<Link className="hover:text-primary text-sm font-medium" to="/about-us">
			About
		</Link>
	</>
);

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
				isScrolled ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 shadow-md backdrop-blur" : ""
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link className="flex items-center justify-center" to="/">
							<Sun className="text-primary h-6 w-6" />
							<span className="ml-2 text-lg font-bold">SolarMart</span>
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<nav className="ml-6 hidden items-center space-x-6 md:flex">
							<NavItems />
						</nav>
						<Button variant="ghost" size="icon" className="relative">
							<ShoppingCart className="h-5 w-5" />
							<span className="bg-primary text-primary-foreground absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full text-xs">
								3
							</span>
							<span className="sr-only">Shopping Cart</span>
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="icon">
									<User className="h-5 w-5" />
									<span className="sr-only">User Profile</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Orders</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuSeparator />
								<Link to="/login">
									<DropdownMenuItem>Log out</DropdownMenuItem>
								</Link>
							</DropdownMenuContent>
						</DropdownMenu>
						<Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="md:hidden">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left">
								<div className="flex flex-col gap-4">
									<Link className="flex items-center" to="/">
										<Sun className="text-primary mr-2 h-6 w-6" />
										<span className="font-bold">SolarMart</span>
									</Link>
									<nav className="flex flex-col space-y-4">
										<NavItems />
									</nav>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
