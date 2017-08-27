'use strict';

const List = require('../lib/list');

describe('Testing List and associated methods', () => {
  describe('#List', () => {
    test('should have a length of zero', () => {
      let list = new List();
      expect(list.length).toEqual(0);
    });
    describe('#push', () => {
      test('It should append a value to the list', () => {
        let list = new List;

        list.push('MyNameIsGavinAndILiketests');
        expect(list[0]).toEqual('MyNameIsGavinAndILiketests');
        expect(list.length).toEqual(1);

        list.push(23453);
        expect(list[1]).toEqual(23453);
        expect(list.length).toEqual(2);

      });
    });

    describe('#pop', () => {
      test('It should remove the last value', () => {
        let list = new List;
        list.push('larry');
        list.push('moe');
        list.push('Scott');

        let result = list.pop();
        expect(result).toEqual('Scott');
        expect(list.length).toEqual(2);
        expect(list[2]).toBe(undefined);

        list = new List();
        result = list.pop();
        expect(result).toEqual(undefined);
        expect(list.length).toEqual(-1);
      });
    });

    describe('#reduce', () => {
      test('It should return sum of all numbers', () => {
        let list = new List();

        list.push(5);
        list.push(5);
        list.push(5);

        let result = list.reduce((a, c) => a + c);
        expect(result).toEqual(15);

        list = new List();
        list.push(1);
        list.push(2);
        list.push('GavinIsTheBest');

        result = list.reduce((a, c) => a + c);
        expect(result).toEqual('3GavinIsTheBest');
      });
    });

    describe('#slice', () => {
      test('should return a copy of a portion of an array into a new array object', () => {
        let list = new List;
        list = [3,4,5,6,7,8];
        expect(list.slice(2, 5)).toEqual([5, 6, 7]);
      });
    });

    describe('#forEach', () => {
      test('It should return original array with callback method applies', () => {
        let list = new List;
        list = [3,4,5];
        expect(list.forEach(a => a * 2)).toEqual([6, 8, 10]);
      });
    });
  });
});
