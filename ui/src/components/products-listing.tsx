import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

// Dummy product data with image URLs
const products = [
	{
		id: 1,
		name: "Solar Panel 100W",
		category: "Panels",
		mrp: 150,
		price: 129.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 2,
		name: "Solar Inverter 1000W",
		category: "Inverters",
		mrp: 300,
		price: 249.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 3,
		name: "Solar Battery 12V",
		category: "Batteries",
		mrp: 200,
		price: 179.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 4,
		name: "Solar Charge Controller",
		category: "Controllers",
		mrp: 80,
		price: 69.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 5,
		name: "Solar Panel 200W",
		category: "Panels",
		mrp: 250,
		price: 219.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 6,
		name: "Solar Inverter 2000W",
		category: "Inverters",
		mrp: 500,
		price: 449.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 7,
		name: "Solar Battery 24V",
		category: "Batteries",
		mrp: 350,
		price: 299.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 8,
		name: "Solar Cable 10m",
		category: "Accessories",
		mrp: 30,
		price: 24.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 9,
		name: "Solar Panel Mount",
		category: "Accessories",
		mrp: 50,
		price: 39.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 10,
		name: "Solar Panel 300W",
		category: "Panels",
		mrp: 350,
		price: 309.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 11,
		name: "Solar Inverter 3000W",
		category: "Inverters",
		mrp: 700,
		price: 649.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 12,
		name: "Solar Battery 48V",
		category: "Batteries",
		mrp: 500,
		price: 449.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 13,
		name: "Solar Meter",
		category: "Accessories",
		mrp: 100,
		price: 89.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 14,
		name: "Solar Panel Cleaner",
		category: "Accessories",
		mrp: 20,
		price: 14.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 15,
		name: "Solar Panel 400W",
		category: "Panels",
		mrp: 450,
		price: 399.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 16,
		name: "Solar Inverter 4000W",
		category: "Inverters",
		mrp: 900,
		price: 849.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 17,
		name: "Solar Battery 100Ah",
		category: "Batteries",
		mrp: 600,
		price: 549.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 18,
		name: "Solar Fuse 30A",
		category: "Accessories",
		mrp: 15,
		price: 9.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 19,
		name: "Solar Panel Optimizer",
		category: "Accessories",
		mrp: 120,
		price: 99.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 20,
		name: "Solar Panel 500W",
		category: "Panels",
		mrp: 550,
		price: 499.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 21,
		name: "Solar Inverter 5000W",
		category: "Inverters",
		mrp: 1100,
		price: 999.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 22,
		name: "Solar Battery 200Ah",
		category: "Batteries",
		mrp: 800,
		price: 749.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 23,
		name: "Solar MC4 Connector",
		category: "Accessories",
		mrp: 10,
		price: 7.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 24,
		name: "Solar Panel Tilt Mount",
		category: "Accessories",
		mrp: 80,
		price: 69.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 25,
		name: "Solar Panel 600W",
		category: "Panels",
		mrp: 650,
		price: 599.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 26,
		name: "Solar Inverter 6000W",
		category: "Inverters",
		mrp: 1300,
		price: 1199.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 27,
		name: "Solar Battery 300Ah",
		category: "Batteries",
		mrp: 1000,
		price: 949.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 28,
		name: "Solar Junction Box",
		category: "Accessories",
		mrp: 25,
		price: 19.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 29,
		name: "Solar Panel Ground Mount",
		category: "Accessories",
		mrp: 150,
		price: 129.99,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 30,
		name: "Solar Panel 1000W",
		category: "Panels",
		mrp: 1000,
		price: 899.99,
		image: "/placeholder.svg?height=200&width=200",
	},
];

const categories = ["All", ...new Set(products.map((product) => product.category))];

export default function ProductsListingComponent() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [sortBy, setSortBy] = useState("name");
	const [searchTerm, setSearchTerm] = useState("");

	const filteredAndSortedProducts = useMemo(() => {
		return products
			.filter(
				(product) =>
					(selectedCategory === "All" || product.category === selectedCategory) &&
					product.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
			.sort((a, b) => {
				if (sortBy === "name") return a.name.localeCompare(b.name);
				if (sortBy === "priceLowToHigh") return a.price - b.price;
				if (sortBy === "priceHighToLow") return b.price - a.price;
				return 0;
			});
	}, [selectedCategory, sortBy, searchTerm]);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-8 text-3xl font-bold">Solar Products</h1>

			<div className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
				<div className="w-full md:w-1/3">
					<Label htmlFor="category">Category</Label>
					<Select value={selectedCategory} onValueChange={setSelectedCategory}>
						<SelectTrigger id="category">
							<SelectValue placeholder="Select category" />
						</SelectTrigger>
						<SelectContent>
							{categories.map((category) => (
								<SelectItem key={category} value={category}>
									{category}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="w-full md:w-1/3">
					<Label htmlFor="sort">Sort by</Label>
					<Select value={sortBy} onValueChange={setSortBy}>
						<SelectTrigger id="sort">
							<SelectValue placeholder="Sort by" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="name">Name</SelectItem>
							<SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
							<SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="w-full md:w-1/3">
					<Label htmlFor="search">Search</Label>
					<Input
						id="search"
						type="text"
						placeholder="Search products..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{filteredAndSortedProducts.map((product) => (
					<div key={product.id} className="flex flex-col rounded-lg border p-4 shadow-sm">
						<Link to={product?.name.split(" ").join("-").toLowerCase()}>
							<div className="relative mb-4 h-48 w-full">
								<img src={product.image} alt={product.name} className="rounded-md object-cover" />
							</div>
							<h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
							<p className="mb-1 text-sm text-gray-500">MRP: ${product.mrp.toFixed(2)}</p>
							<p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
								${product.price.toFixed(2)}
								<span className="ml-2 text-sm font-normal text-gray-500">
									Save ${(product.mrp - product.price).toFixed(2)}
								</span>
							</p>
						</Link>
						<Button className="mt-4 w-full">Add to Cart</Button>
					</div>
				))}
			</div>

			{filteredAndSortedProducts.length === 0 && <p className="mt-8 text-center text-gray-500">No products found.</p>}
		</div>
	);
}
