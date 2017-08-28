'use strict';

const List = module.exports = function() {
  // console.log('args', arguments)
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// PUSH: This is a pure method (FUNCTIONAL after lecture)
List.prototype.pushPure = function(value) {
  let newList = Object.assign({}, this);
  newList[newList.length++] = value;
  return newList;
};

//PUSH: This in not a pure method - modifies the original
List.prototype.myPush = function(value) {
  this[this.length++] = value;
  // this[this.length + 1] = value // Not what we want - does not increment the value of length
  return this;
};

//POP
List.prototype.myPop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};

//FOR EACH
List.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//FILTER
List.prototype.myFilter = function(callback) {
  let result = [];
  for (let i in this) {
    if (callback(this[i], i, this)) {
      result[i] = this[i];
    }
  }
  return result;
};

//MAP
// Syntax from MDN: var new_array = arr.map(function callback(currentValue, index, array) {
//     // Return element for new_array
// }[, thisArg])

List.prototype.myMap = function(callback) {
  let new_array = [];
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      new_array[i] = this[i];
    }
  }
};

//REDUCE
//Syntax from MDN: arr.reduce(callback[, initialValue])
//callback is basically acc, current, current Index, array

List.prototype.myReduce = function(callback) {
  let singleValueReturn;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      singleValueReturn += this[i];
    }
  }
  return singleValueReturn;
};

//SLICE - adjusted this from what we had in class as a group to make more sense with start/stop. 
List.prototype.mySlice = function(start, stop) {
  let z = [];
  for(var i = start; i < stop; i++){
    z.push(this[i]);
  }
  return z;
};
