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
/**
 * cd
 * Desktop
 * ls
 * clear
 * cd ..
 * auto complete
 * mkdir
 * touch / edit
 * rm del
 * rmdir
 */

console.log('********** 270 Introduction to NPM **********');
/**
 * 270
 * npm -v
 * npm init
 * npm install (package) / i (package)
 * package json
 * npm install (install all the dependencies)
 */
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
// create a copy from an object

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log('state', state);
console.log('stateClone', stateClone);
console.log('stateDeepClone', stateDeepClone);

console.log('+++++ Changing user to logged in false');
state.user.loggedIn = false;
console.log('state', state.user);
console.log('stateClone', stateClone.user);
console.log('stateDeepClone', stateDeepClone.user);

console.log('********** 271 Bundling with Parcel **********');
/**
 * 271
 * npm i parcel --save-dev -> Install parcel
 * npx parcel index.html --> Run parcel
 * npm scripts:
 *          "start": "parcel index.html",
            "build": "parcel build index.html"
 *          Then use "npm run build" in the terminal
 *          Then use "npm run build" in the terminal
 */
console.log('module hot replacement');
if (module.hot) {
  module.hot.accept();
}

console.log('********** 272 Configuring Babel and Polyfilling **********');
/**
 * Parcel made good decisions for browser supports for us
 */

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

/*
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
*/

console.log(
  '********** 273 Modern, clean and declarative JS Programming **********'
);
