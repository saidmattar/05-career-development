'use strict';


const List = module.exports = function() {
  // console.log('args', arguments)
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};



//PUSH
List.prototype.myPush = function(value) {
  this[this.length++] = value;
  return this;
};

//POP
List.prototype.myPop = function() {
  let result = this[this.length - 1];
  delete this[--this.length];
  return result;
};


//MAP
List.prototype.myMap = function(callback){
  let list = new List;
  for (var i = 0; i < this.length; i++) { list.myPush(callback(this[i]));
  }
  return list;
};


//SLICE
List.prototype.mySlice = function (arg, arg1) {
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
  }
  for(var i = start; i < this.length; i++) {
    result = acc(result, this[i]);
  }
  return result;
};

//FILTER
List.prototype.filter= function(callback){
  let result = new List();
  for (let i =0; i<this.length; ++i){
    if(callback(this[i], i, this)){
      result[result.length++] = this[i];
    }
  }
};
