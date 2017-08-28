'use strict'

const List = require('./lib/list')

let list = new List(1,2,3,4)

console.log('list instance', list)

let newList = list.slice(0,2);

console.log(newList)

// let val = list.pop()
// console.log(val)
// console.log(list)
