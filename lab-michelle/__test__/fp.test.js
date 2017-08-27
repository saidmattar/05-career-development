'use strict';

const List = require('../lib/fp.js');

describe('Testing methods in fp.js', function() {
  describe('Testing Push', () => {
    test('should return (1,2,3,4) given (1,2,3) & 4', () => {
      let listOne = new List (1,2,3);
      listOne.push(4);
      expect(listOne[3]).toEqual(4);
    });
    test('should return meep', ()=> {
      let listTwo = new List (1, 2, Infinity);
      listTwo.push('meep');
      expect(listTwo[3]).toEqual('meep');
    });
    test('should return true', ()=> {
      let listThree = new List ('do not talk about fight club');
      listThree.push(true);
      expect(listThree[1]).toEqual(true
      );
    });
    describe('Testing Pop', () => {
      test('should return something', ()=> {
        let listOne = new List('happy', 'sad', 'confused', 'sleepy', 'hungry');
        listOne.pop('hungry');
        expect(listOne.length).toEqual(4);
      });
    });
  });
});
//
//
// describe('Testing the FP module', function() {
//   describe('#map method', () => {
//     test('should return an array of [2, 4] given [1, 2]', () => {
//       let doubles = fp.map([1, 2], n => n * 2)
//       expect(doubles).toEqual([2, 4])
//     })
//     test('should map each string char to an array and concat 2 to each char', () => {
//       let gnarf = fp.map('hello', n => n + 2)
//       expect(gnarf).toEqual(['h2', 'e2', 'l2', 'l2', 'o2'])
//     })
