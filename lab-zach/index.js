'use strict'

const List = require('./lib/list')

let list = new List('1', true, 23, {})

console.log('list instance', list)

let newList = list.slice(1,3);



// let val = list.pop()
// console.log(val)
// console.log(list)
