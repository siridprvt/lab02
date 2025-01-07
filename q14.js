class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }

    calculatePrice() {
        return this.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(item) {
        this.items.push(item);
        this.updateLocalStorage();
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
        this.updateLocalStorage();
    }

    viewItems() {
        return this.items;
    }

    updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.calculatePrice(), 0);
    }

    applyDiscount(code) {
        if (code === 'DISCOUNT10') {
            return this.calculateTotal() * 0.9;
        }
        return this.calculateTotal();
    }
}
