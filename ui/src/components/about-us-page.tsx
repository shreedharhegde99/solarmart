import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Residential Solar Installation",
		description: "5kW system installed for a family home in California",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: 2,
		title: "Commercial Solar Project",
		description: "20kW system installed for a small business in Texas",
		image: "/placeholder.svg?height=400&width=600",
	},
];

export default function AboutUsPageComponent() {
	const [currentProject, setCurrentProject] = useState(0);

	const nextProject = () => {
		setCurrentProject((prev) => (prev + 1) % projects.length);
	};

	const prevProject = () => {
		setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
	};

	useEffect(() => {
		const timer = setInterval(nextProject, 5000); // Auto-advance every 5 seconds
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="container mx-auto space-y-12 px-4 py-8">
			<section className="space-y-4">
				<h1 className="text-center text-3xl font-bold">About Us</h1>
				<div className="relative">
					<Card className="overflow-hidden">
						<CardContent className="p-0">
							{projects.map((project, index) => (
								<div
									key={project.id}
									className={`transition-opacity duration-500 ${
										index === currentProject ? "opacity-100" : "absolute inset-0 opacity-0"
									}`}
								>
									<img
										src={project.image}
										alt={project.title}
										width={600}
										height={400}
										className="h-[400px] w-full object-cover"
									/>
									<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
										<h3 className="text-xl font-semibold">{project.title}</h3>
										<p>{project.description}</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
					<Button
						variant="outline"
						size="icon"
						className="absolute left-2 top-1/2 -translate-y-1/2 transform"
						onClick={prevProject}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="absolute right-2 top-1/2 -translate-y-1/2 transform"
						onClick={nextProject}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</section>

			<section className="grid items-center gap-8 md:grid-cols-2">
				<div>
					<img src="https://imgur.com/1yLiMI7.png" alt="Website Owner" />
				</div>
				<div className="space-y-4">
					<h2 className="text-2xl font-semibold">About Me</h2>
					<p>
						Hello! I'm a full stack developer with 1 year of experience and a passionate solar and green energy
						enthusiast. My journey in the world of technology and sustainable energy has led me to successfully install
						2 solar systems from start to finish.
					</p>
					<p>
						As a developer, I bring my technical expertise to create user-friendly and efficient solutions for solar
						energy systems. My hands-on experience with solar installations gives me a unique perspective on the
						practical aspects of implementing green energy solutions.
					</p>
					<p>
						I'm committed to promoting sustainable energy and helping others harness the power of the sun. Whether
						you're looking for advice on solar installations or need a custom software solution for your green energy
						project, I'm here to help!
					</p>
				</div>
			</section>

			<section className="rounded-lg bg-neutral-100 p-8 dark:bg-neutral-800">
				<h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
				<div className="space-y-4">
					<div className="flex items-center space-x-2">
						<Mail className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
						<a href="mailto:snhkelemane@gmail.com" className="hover:underline">
							snhkelemane@gmail.com
						</a>
					</div>
					<div className="flex items-center space-x-2">
						<Phone className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
						<a href="tel:+917204482283" className="hover:underline">
							(+91)72044 82283
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
