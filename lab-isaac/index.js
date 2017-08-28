'use strict';

const List = require('./lib/list');

let list = new List(1,3,6,7,9);

console.log('list instance', list);

// let newList = list.push(4);

let newList = list.filter(function(val) {
  val >= 3;
});
console.log('filtered: ', newList);
