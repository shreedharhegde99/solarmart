import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Truck, CreditCardIcon, Smartphone } from "lucide-react";

// Mock cart items
const cartItems = [
	{ id: 1, name: "Solar Panel 100W", price: 129.99, quantity: 2 },
	{ id: 2, name: "Solar Inverter 1000W", price: 249.99, quantity: 1 },
	{ id: 3, name: "Solar Battery 12V", price: 179.99, quantity: 1 },
];

// Mock predefined addresses
const predefinedAddresses = [
	{ id: 1, name: "Home", address: "123 Solar Street, Sunnyville, CA 12345" },
	{ id: 2, name: "Office", address: "456 Energy Avenue, Powertown, NY 67890" },
];

export default function CheckoutPageComponent() {
	const [step, setStep] = useState(1);
	const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
	const [paymentMethod, setPaymentMethod] = useState("credit");

	const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const tax = totalPrice * 0.1; // Assuming 10% tax
	const shipping = 20; // Flat shipping rate
	const grandTotal = totalPrice + tax + shipping;

	const handleNextStep = () => {
		setStep(step + 1);
	};

	const handlePreviousStep = () => {
		setStep(step - 1);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-8 text-3xl font-bold">Checkout</h1>
			<div className="grid gap-8 md:grid-cols-3">
				<div className="space-y-8 md:col-span-2">
					{step === 1 && (
						<div>
							<h2 className="mb-4 text-2xl font-semibold">Shipping Information</h2>
							<div className="space-y-4">
								<div>
									<Label>Select a saved address</Label>
									<RadioGroup
										value={selectedAddress?.toString()}
										onValueChange={(value) => setSelectedAddress(Number(value))}
									>
										{predefinedAddresses.map((addr) => (
											<div key={addr.id} className="flex items-center space-x-2">
												<RadioGroupItem value={addr.id.toString()} id={`address-${addr.id}`} />
												<Label htmlFor={`address-${addr.id}`}>
													<span className="font-semibold">{addr.name}</span> - {addr.address}
												</Label>
											</div>
										))}
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="new" id="address-new" />
											<Label htmlFor="address-new">Use a new address</Label>
										</div>
									</RadioGroup>
								</div>
								{selectedAddress === null && (
									<div className="grid gap-4">
										<div className="grid gap-4 sm:grid-cols-2">
											<div>
												<Label htmlFor="firstName">First Name</Label>
												<Input id="firstName" placeholder="John" />
											</div>
											<div>
												<Label htmlFor="lastName">Last Name</Label>
												<Input id="lastName" placeholder="Doe" />
											</div>
										</div>
										<div>
											<Label htmlFor="address">Address</Label>
											<Input id="address" placeholder="123 Solar Street" />
										</div>
										<div className="grid gap-4 sm:grid-cols-3">
											<div>
												<Label htmlFor="city">City</Label>
												<Input id="city" placeholder="Sunnyville" />
											</div>
											<div>
												<Label htmlFor="state">State</Label>
												<Select>
													<SelectTrigger id="state">
														<SelectValue placeholder="Select state" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="ca">California</SelectItem>
														<SelectItem value="ny">New York</SelectItem>
														<SelectItem value="tx">Texas</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<Label htmlFor="zipCode">ZIP Code</Label>
												<Input id="zipCode" placeholder="12345" />
											</div>
										</div>
										<div>
											<Label htmlFor="phone">Phone Number</Label>
											<Input id="phone" type="tel" placeholder="(123) 456-7890" />
										</div>
									</div>
								)}
							</div>
							<Button className="mt-6" onClick={handleNextStep}>
								Continue to Payment
							</Button>
						</div>
					)}

					{step === 2 && (
						<div>
							<h2 className="mb-4 text-2xl font-semibold">Payment Information</h2>
							<RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="credit" id="credit" />
									<Label htmlFor="credit" className="flex items-center">
										<CreditCardIcon className="mr-2" />
										Credit Card
									</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="debit" id="debit" />
									<Label htmlFor="debit" className="flex items-center">
										<CreditCard className="mr-2" />
										Debit Card
									</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="upi" id="upi" />
									<Label htmlFor="upi" className="flex items-center">
										<Smartphone className="mr-2" />
										UPI
									</Label>
								</div>
							</RadioGroup>
							{(paymentMethod === "credit" || paymentMethod === "debit") && (
								<div className="mt-4 space-y-4">
									<div>
										<Label htmlFor="cardNumber">Card Number</Label>
										<Input id="cardNumber" placeholder="1234 5678 9012 3456" />
									</div>
									<div className="grid gap-4 sm:grid-cols-3">
										<div className="sm:col-span-2">
											<Label htmlFor="expiryDate">Expiry Date</Label>
											<Input id="expiryDate" placeholder="MM / YY" />
										</div>
										<div>
											<Label htmlFor="cvv">CVV</Label>
											<Input id="cvv" placeholder="123" />
										</div>
									</div>
									<div>
										<Label htmlFor="nameOnCard">Name on Card</Label>
										<Input id="nameOnCard" placeholder="John Doe" />
									</div>
								</div>
							)}
							{paymentMethod === "upi" && (
								<div className="mt-4">
									<Label htmlFor="upiId">UPI ID</Label>
									<Input id="upiId" placeholder="yourname@upi" />
								</div>
							)}
							<div className="mt-6 space-x-4">
								<Button variant="outline" onClick={handlePreviousStep}>
									Back
								</Button>
								<Button onClick={handleNextStep}>Review Order</Button>
							</div>
						</div>
					)}

					{step === 3 && (
						<div>
							<h2 className="mb-4 text-2xl font-semibold">Review Your Order</h2>
							<div className="space-y-4">
								<div>
									<h3 className="font-semibold">Shipping Address</h3>
									{selectedAddress !== null ? (
										<p>{predefinedAddresses.find((addr) => addr.id === selectedAddress)?.address}</p>
									) : (
										<p>New address: 123 Solar Street, Sunnyville, CA 12345</p>
									)}
								</div>
								<div>
									<h3 className="font-semibold">Payment Method</h3>
									<p>{paymentMethod === "credit" ? "Credit Card" : paymentMethod === "debit" ? "Debit Card" : "UPI"}</p>
								</div>
								<div>
									<h3 className="font-semibold">Order Items</h3>
									{cartItems.map((item) => (
										<div key={item.id} className="flex justify-between">
											<span>
												{item.name} x {item.quantity}
											</span>
											<span>${(item.price * item.quantity).toFixed(2)}</span>
										</div>
									))}
								</div>
							</div>
							<div className="mt-6 space-x-4">
								<Button variant="outline" onClick={handlePreviousStep}>
									Back
								</Button>
								<Button>Place Order</Button>
							</div>
						</div>
					)}
				</div>

				<div>
					<div className="rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800">
						<h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
						<div className="space-y-2">
							{cartItems.map((item) => (
								<div key={item.id} className="flex justify-between">
									<span>
										{item.name} x {item.quantity}
									</span>
									<span>${(item.price * item.quantity).toFixed(2)}</span>
								</div>
							))}
						</div>
						<Separator className="my-4" />
						<div className="space-y-2">
							<div className="flex justify-between">
								<span>Subtotal</span>
								<span>${totalPrice.toFixed(2)}</span>
							</div>
							<div className="flex justify-between">
								<span>Tax</span>
								<span>${tax.toFixed(2)}</span>
							</div>
							<div className="flex justify-between">
								<span>Shipping</span>
								<span>${shipping.toFixed(2)}</span>
							</div>
						</div>
						<Separator className="my-4" />
						<div className="flex justify-between font-semibold">
							<span>Total</span>
							<span>${grandTotal.toFixed(2)}</span>
						</div>
					</div>
					<div className="mt-6 rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800">
						<div className="flex items-center">
							<Truck className="mr-2" />
							<span>Free shipping on orders over $500</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
