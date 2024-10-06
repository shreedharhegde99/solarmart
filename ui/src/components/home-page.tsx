import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sun, Battery, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePageComponent() {
	return (
		<div className="flex min-h-screen flex-col">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<img
								alt="Solar Panels"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
								height="550"
								src="https://i.imgur.com/BjV7HY1.jpg"
								width="550"
							/>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Power Your Home with Solar Energy
									</h1>
									<p className="max-w-[600px] text-neutral-500 dark:text-neutral-400 md:text-xl">
										Harness the power of the sun with our cutting-edge solar solutions. Save money and reduce your
										carbon footprint.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link to="/products">
										<Button className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300">
											Shop Now
										</Button>
									</Link>
									<Button variant="outline">Learn More</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-neutral-100 py-12 dark:bg-neutral-800 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{[1, 2, 3].map((i) => (
								<div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
									<img
										alt={`Solar Panel ${i}`}
										className="h-60 w-full object-cover"
										height="300"
										src="/placeholder.svg"
										width="400"
									/>
									<div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 transition-all group-hover:translate-y-0">
										<div>
											<h3 className="text-lg font-semibold text-white">Solar Panel Model X{i}</h3>
											<p className="text-sm text-white/80">High-efficiency, weather-resistant solar panels</p>
											<Button className="mt-2" variant="secondary">
												View Details
											</Button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
							Why Choose Solar Energy?
						</h2>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center text-center">
								<Battery className="mb-4 h-12 w-12 text-neutral-900 dark:text-neutral-50" />
								<h3 className="mb-2 text-xl font-bold">Energy Independence</h3>
								<p className="text-neutral-500 dark:text-neutral-400">
									Reduce reliance on the grid and take control of your energy needs.
								</p>
							</div>
							<div className="flex flex-col items-center text-center">
								<Zap className="mb-4 h-12 w-12 text-neutral-900 dark:text-neutral-50" />
								<h3 className="mb-2 text-xl font-bold">Cost Savings</h3>
								<p className="text-neutral-500 dark:text-neutral-400">
									Lower your electricity bills and enjoy long-term energy savings.
								</p>
							</div>
							<div className="flex flex-col items-center text-center">
								<Sun className="mb-4 h-12 w-12 text-neutral-900 dark:text-neutral-50" />
								<h3 className="mb-2 text-xl font-bold">Eco-Friendly</h3>
								<p className="text-neutral-500 dark:text-neutral-400">
									Reduce your carbon footprint and contribute to a cleaner environment.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-neutral-100 py-12 dark:bg-neutral-800 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Go Solar?</h2>
								<p className="max-w-[900px] text-neutral-500 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Join thousands of homeowners who have made the switch to clean, renewable energy.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
									<Button type="submit">Subscribe</Button>
								</form>
								<p className="text-xs text-neutral-500 dark:text-neutral-400">
									Sign up to receive updates and special offers.{""}
									<Link to="/products" className="underline underline-offset-2">
										Terms & Conditions
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
				<p className="text-xs text-neutral-500 dark:text-neutral-400">© 2024 SolarMart. All rights reserved.</p>
				<nav className="flex gap-4 sm:ml-auto sm:gap-6">
					<Link to="/products" className="text-xs underline-offset-4 hover:underline">
						Terms of Service
					</Link>
					<Link to="/products" className="text-xs underline-offset-4 hover:underline">
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
