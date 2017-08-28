'use strict';


const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key]
  }
  this.length = arguments.length;
};

List.prototype.filter = function(callback) {
    var result = [];
    for(let i in this) {
      if(callback(this[i], i, this)) {
        result[i] = this[i]
      }
    }
  return result;
}

List.prototype.pop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};

List.prototype.push = function(val) {
  this[this.length++] = val;
  return this;
};


List.prototype.map = function(callback){
  let newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]))
  }
  return (newArr);
};

List.prototype.slice = function (arg, arg1) {
  let result = [];
  for (var i = arg; i < arg1; i++) {
    result.push(this[i])
  }
  return result;
};

List.prototype.reduce = function(callback) {
  let total = 0;
  for(let i = 0; i < this.length; i++) {
    // Need to finish this
    }

};
