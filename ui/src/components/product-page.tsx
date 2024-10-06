import { useState } from "react";
import { Star, Zap, Leaf, Battery, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productImages = [
	{ src: "/placeholder.svg", alt: "Solar Panel XP-500 front view" },
	{ src: "/placeholder.svg", alt: "Solar Panel XP-500 angle view" },
	{ src: "/placeholder.svg", alt: "Solar Panel XP-500 back view" },
	{ src: "/placeholder.svg", alt: "Solar Panel XP-500 installation example" },
];

export default function ProductPageComponent() {
	const [quantity, setQuantity] = useState(1);
	const [currentImage, setCurrentImage] = useState(0);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="space-y-4 self-start md:sticky md:top-8">
					<div className="relative aspect-square">
						<img
							src={productImages[currentImage].src}
							alt={productImages[currentImage].alt}
							className="h-full w-full rounded-lg object-cover"
							width={500}
							height={500}
						/>
					</div>
					<div className="flex space-x-2 overflow-x-auto pb-2">
						{productImages.map((image, index) => (
							<button
								key={index}
								onClick={() => setCurrentImage(index)}
								className={`flex-shrink-0 ${
									currentImage === index
										? "ring-2 ring-neutral-900 dark:ring-neutral-50"
										: "hover:ring-2 hover:ring-gray-300"
								}`}
							>
								<img
									src={image.src}
									alt={`Thumbnail ${index + 1}`}
									className="h-20 w-20 rounded object-cover"
									width={80}
									height={80}
								/>
							</button>
						))}
					</div>
				</div>
				<div className="space-y-6">
					<div>
						<h1 className="text-3xl font-bold">Solar Panel XP-500</h1>
						<div className="mt-2 flex items-center">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="fill-primary h-5 w-5 text-neutral-900 dark:text-neutral-50" />
								))}
							</div>
							<span className="ml-2 text-sm text-gray-500">128 reviews</span>
						</div>
					</div>
					<div className="text-4xl font-bold">$599.99</div>
					<div className="space-y-4">
						<div className="flex items-center space-x-4">
							<label htmlFor="quantity" className="font-medium">
								Quantity:
							</label>
							<Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
								<SelectTrigger className="w-24">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{[1, 2, 3, 4, 5].map((num) => (
										<SelectItem key={num} value={num.toString()}>
											{num}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex space-x-4">
							{/* <Link to="/cart" className="flex-1"> */}
							<Button className="w-full flex-1">Buy Now</Button>
							{/* </Link> */}
							<Button variant="outline" className="flex-1">
								<ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
							</Button>
						</div>
					</div>
					<Tabs defaultValue="description">
						<TabsList>
							<TabsTrigger value="description">Description</TabsTrigger>
							<TabsTrigger value="specifications">Specifications</TabsTrigger>
							<TabsTrigger value="reviews">Reviews</TabsTrigger>
						</TabsList>
						<TabsContent value="description" className="space-y-4">
							<p>
								The Solar Panel XP-500 is our most advanced residential solar panel, designed to maximize energy
								production and efficiency. With its sleek design and high-performance cells, it's the perfect solution
								for homeowners looking to reduce their carbon footprint and energy bills.
							</p>
							<ul className="space-y-2">
								<li className="flex items-center">
									<Zap className="mr-2 h-5 w-5 text-neutral-900 dark:text-neutral-50" />
									High efficiency: Up to 22% conversion rate
								</li>
								<li className="flex items-center">
									<Leaf className="mr-2 h-5 w-5 text-neutral-900 dark:text-neutral-50" />
									Eco-friendly: Reduces CO2 emissions
								</li>
								<li className="flex items-center">
									<Battery className="mr-2 h-5 w-5 text-neutral-900 dark:text-neutral-50" />
									Long-lasting: 25-year performance warranty
								</li>
							</ul>
						</TabsContent>
						<TabsContent value="specifications" className="space-y-4">
							<h3 className="text-lg font-semibold">Technical Specifications</h3>
							<ul className="space-y-2">
								<li>
									<span className="font-medium">Dimensions:</span> 65.55" x 39.37" x 1.57"
								</li>
								<li>
									<span className="font-medium">Weight:</span> 41.2 lbs (18.7 kg)
								</li>
								<li>
									<span className="font-medium">Cell Type:</span> Monocrystalline PERC
								</li>
								<li>
									<span className="font-medium">Power Output:</span> 500W
								</li>
								<li>
									<span className="font-medium">Efficiency:</span> 22.1%
								</li>
								<li>
									<span className="font-medium">Operating Temperature:</span>
									{""}
									-40°F to +185°F
								</li>
								<li>
									<span className="font-medium">Warranty:</span> 25 years
								</li>
							</ul>
						</TabsContent>
						<TabsContent value="reviews" className="space-y-4">
							<h3 className="text-lg font-semibold">Customer Reviews</h3>
							<div className="space-y-4">
								{[
									{
										name: "John D.",
										rating: 5,
										comment: "Excellent solar panels! They've significantly reduced my energy bills.",
									},
									{
										name: "Sarah M.",
										rating: 4,
										comment: "Great product, but installation was a bit tricky. Overall, very satisfied.",
									},
									{
										name: "Robert L.",
										rating: 5,
										comment: "Top-notch quality and performance. Highly recommended!",
									},
								].map((review, index) => (
									<div key={index} className="border-b pb-4">
										<div className="flex items-center">
											<span className="mr-2 font-medium">{review.name}</span>
											<div className="flex">
												{[...Array(review.rating)].map((_, i) => (
													<Star key={i} className="fill-primary h-4 w-4 text-neutral-900 dark:text-neutral-50" />
												))}
											</div>
										</div>
										<p className="mt-1">{review.comment}</p>
									</div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
