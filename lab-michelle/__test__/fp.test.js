'use strict';

const fp = require('../lib/fp');

describe('Testing methods in fp.js', function() {
  describe('Testing Push', () => {
    test('should return (1,2,3,4) given (1,2,3) & 4', () => {
      let ListOne = new List (1, 2, 3);
      expect(List.push(4)).toEqual(1,2,3,4);
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
