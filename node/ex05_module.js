console.log(global === this); // false
console.log(module === this); // false
console.log(exports === this); // true
console.log(module.exports === this); // true

this.digaOi = function() {
  console.log("Oi!!!");
};
