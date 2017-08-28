'use strict';

const List = require('../lib/list');

describe('Testing List and associated methods', () => {
  describe('#List', () => {
    test('should have a length of zero', () => {
      let list = new List();
      expect(list.length).toEqual(0);
    });
    test('Should create new list based on arguments', () => {
      let list = new List('hello', 'world');
      expect(list[0]).toEqual('hello');
      expect(list.length).toEqual(2);
    });
    test('Should create new list based on arguments', () => {
      let list = new List('hello', 'world', 'im', 45, 'years', true);
      expect(list[3]).toEqual(45);
      expect(list[5]).toEqual(true);
      expect(list.length).toEqual(6);
    });
  });

  describe('#push', () => {
    test('It should append a string to the list', () => {
      let list = new List;
      list.myPush('MyNameIsGavinAndILiketests');
      expect(list[0]).toEqual('MyNameIsGavinAndILiketests');
      expect(list.length).toEqual(1);
    });
    test('It should append an integer to the list', () => {
      let list = new List;
      list.myPush(23453);
      expect(list[0]).toEqual(23453);
      expect(list.length).toEqual(1);
    });
    test('It should append a boolean value to the list', () => {
      let list = new List;
      list.myPush(true);
      expect(list[0]).toEqual(true);
      expect(list.length).toEqual(1);
    });
  });

  describe('#pop', () => {
    test('It should remove the last value', () => {
      let list = new List;
      list.myPush('larry');
      list.myPush('moe');
      list.myPush('Scott');
      let result = list.myPop();
      expect(result).toEqual('Scott');
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);
    });
    test('It should remove the last integer', () => {
      let list = new List;
      list.myPush(1);
      list.myPush(2);
      list.myPush(43);
      let result = list.myPop();
      expect(result).toEqual(43);
      expect(list.length).toEqual(2);
    });
    test('If nothing to pop, should return undefined', () => {
      let list = new List();
      let result = list.myPop();
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(-1);
    });
  });

  describe('#reduce', () => {
    test('It should return sum of all numbers', () => {
      let list = new List();
      list.myPush(5);
      list.myPush(5);
      list.myPush(5);
      let result = list.reduce((a, c) => a + c);
      expect(result).toEqual(15);
    });
    test('It should return sum of all numbers concatenated onto string', () => {
      let list = new List();
      list.myPush(1);
      list.myPush(2);
      list.myPush('GavinIsTheBest');
      let result = list.reduce((a, c) => a + c);
      expect(result).toEqual('3GavinIsTheBest');
    });
    test('It should return sum of all numbers concatenated onto string', () => {
      let list = new List();
      list.myPush(1);
      list.myPush(2);
      list.myPush('GavinIsTheBest');
      let result = list.reduce((a, c ) => a + c);
      expect(result).toEqual('3GavinIsTheBest');
    });
    test('It should return all names concatenated back together', () => {
      let list = new List();
      list.myPush('Gavin');
      list.myPush('Scott');
      list.myPush('Nichole');
      let result = list.reduce((a, c) => a + c);
      expect(result).toEqual('GavinScottNichole');
    });
  });

  describe('#slice', () => {
    test('should return a copy of a portion of numbers into a new array object', () => {
      let list = new List(3,4,5,6,7,8);
      expect(list.mySlice(2, 5)).toEqual([5, 6, 7]);
    });
    test('should return a copy of a portion of strings into a new array object', () => {
      let list = new List('gavin', 'scott', 'shaun', 'allie');
      expect(list.mySlice(1, 3)).toEqual(['scott', 'shaun']);
    });
    test('should return a copy of a portion of strings, booleans, or numbers into a new array object', () => {
      let list = new List('gavin', 2, true, false);
      expect(list.mySlice(1, 3)).toEqual([2, true]);
    });
  });

  describe('#map', () => {
    test('It should return an altered list', () => {
      let list = new List(1,2,3);
      let result = list.myMap((x) => x * 2);
      expect(list.myMap((x) => x *2 )).toEqual({'0': 2, '1': 4, '2': 6, 'length': 3});
      expect(result.length).toBe(3);
    });
    test('It should return an altered list', () => {
      let list = new List('ih','mi','nivag');
      expect(list.myMap((x)=>x.split('').reverse().join(''))).toEqual({'0': 'hi', '1': 'im', '2': 'gavin', 'length': 3});
    });
    test('It should return an altered list', () => {
      let list = new List(true,false,2);
      expect(list.myMap((x)=>x + 2)).toEqual({'0': 3, '1': 2, '2': 4, 'length': 3});
    });
  });
});
