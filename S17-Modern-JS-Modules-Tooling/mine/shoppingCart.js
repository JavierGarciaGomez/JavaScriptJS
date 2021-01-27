// 266
// Exporting module
console.log('266 Exporting a module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;

export { totalPrice as price };

// EXPORT DEFAULT
export default function () {
  console.log('Im the default export');
}

// 2 type of exports
// Name exports and default exports.
// Name put export in front of the export (can export multiple things). There are two ways of name export: inline & at the end
