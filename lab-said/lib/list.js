const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};


List.prototype.copy = function () {
  let result = new List();
  for (let key in this) {
    result[key] = this[key];
  }
  return result;
};

List.prototype.push = function (value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

List.prototype.pop = function () {
  let result = this.copy();
  delete result[--result.length];
  return {
    value: this[this.length - 1],
    list: result,
  };
};

List.prototype.forEach = function (callback) {
  for(let i = 0; i < this.lenght; i++){
    callback(this[i], i, this);
  }
};

List.prototype.slice = function(start, stop) {
  let counter = 0;
  let newArr = [];
  while (counter < stop ){
    for(var i = 0; i <this.length; i++){
      if (this.key[i] === start) {
        newArr.push(this.key[i]);
        delete this.key[i];
        counter++;
      }
    }
    return newArr;
  }
};

List.prototype.filter = function (callback) {
  let result = {};
  for( let i in this ) {
    if( callback(this[i], i, this)) {
      result[i] = this[i];
    }
  }
  return result;
};

List.prototype.map = function(callback) {
  let result = new List();
  for(let i = 0; i<this.length; ++i) {
    result[i] = callback(this[i], i, this);
  }
  return result;
};

List.prototype.reduce = function(callback, initial) {
  let i = 0;
  let result = initial ? initial : this[i++];
  for(i; i <this.length; ++i) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
