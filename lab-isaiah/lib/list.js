'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

List.prototype.pushPure = function(value) {
  let newList = Object.assign({}, this);
  newList[newList.length++] = value;
  return newList;
};

List.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
};

List.prototype.pop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};

List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

List.prototype.filter = function(callback) {
  let result = {};
  for(let i in this) {
    if(callback(this[i], i, this)) {
      result[i] = this[i];
    }
  }
  return result;
};

List.prototype.slice = function (x, y) {
  let results = [];
  let blah = x - y;
  for(let i = 0; i < blah.length; i++) {
    if(this.key[i] === x) {
      while(counter < blah){
        delete this.key[i];
        results.push(this.key);
        results.push(this.key +1);
      }

    }
  }
}
