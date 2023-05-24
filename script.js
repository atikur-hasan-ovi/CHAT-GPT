// Product class
class Product {
	constructor(id, name, price) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

// Cart class
class Cart {
	constructor() {
		this.items = [];
	}

	// Add item to cart
	addItem(item) {
		const index = this.items.findIndex((i) => i.product.id === item.product.id);
		if (index === -1) {
			this.items.push(item);
		} else {
			this.items[index].quantity += item.quantity;
		}
	}

	// Remove item from cart
	removeItem(item) {
		const index = this.items.findIndex((i) => i.product.id === item.product.id);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	}

	// Get cart total
	getTotal() {
		return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
	}

	// Render cart
	render() {
		const cartEl = document.querySelector('#cart');
		if (this.items.length === 0) {
			cartEl.innerHTML = '<p>Your cart is empty.</
