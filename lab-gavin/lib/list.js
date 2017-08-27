'use strict';


const List = module.exports = function() {
  // console.log('args', arguments)
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// This is a pure method
// List.prototype.push = function(value) {
  //   let newList = Object.create(this)
  //   newList[newList.length++] = value
  //   return newList
  // }

// This in not a pure method - modifies the original
List.prototype.push = function(value) {
  this[this.length++] = value;
  // this[this.length + 1] = value // Not what we want - does not increment the value of length
  return this;
};

//POP
List.prototype.pop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};


//FOREACH
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};


//SLICE
List.prototype.slice = function (arg, arg1) {
  let result = [];
  for (var i = arg; i < arg1; i++) {
    result.push(this[i]);
  }
  return result;
};

//REDUCE
List.prototype.reduce = function(acc, curr) {
  let result, start;

  if(!curr) {
    result = this[0];
    start = 1;
  } else {
    result = curr;
    start = 0;
  }
  for(var i = start; i < this.length; i++) {
    result = acc(result, this[i]);
  }
  return result;
};
