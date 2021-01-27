// 266 changing nae of Export
import { addToCart, price as priceRenamed } from './shoppingCart.js';
// 2666 import everything
import * as ShoppingCart2 from './shoppingCart2.js';
// 266 import default
import defaultImport from './shoppingCart.js';

console.log(
  '********** 264 An Overview of Modern JavaScript Development **********'
);
console.log('********** 265 An Overview of Modules in JavaScript **********');
console.log('********** 266 Importing and exporting modules **********');
console.log('266 Importing a module');
// using an import
addToCart('banana', 10);
console.log('importedVar', priceRenamed);

console.log(ShoppingCart2.shopCart2VarA, ShoppingCart2.shopCart2VarB);
defaultImport();

console.log('********** 267 The Module Pattern **********');
///////////////////////////////////////
// The Module Pattern

const ShoppingCart3 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart3.addToCart('apple', 4);
ShoppingCart3.addToCart('pizza', 2);
console.log(ShoppingCart3);
console.log(ShoppingCart3.shippingCost);

console.log('********** 268 Common JS Modules **********');
///////////////////////////////////////
// CommonJS Modules
/*
// Export
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  
  // Import
  const { addTocart } = require('./shoppingCart.js'); 
  */

console.log('********** 269 Command Line **********');
