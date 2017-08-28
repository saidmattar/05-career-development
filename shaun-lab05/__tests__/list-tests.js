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
      let list = new List('hello', 'steve', 'im', 29, 'years', true);
      expect(list[3]).toEqual(45);
      expect(list[5]).toEqual(true);
      expect(list.length).toEqual(6);
    });
  });

  describe('#push', () => {
    test('It should append a string to the list', () => {
      let list = new List;
      list.push('whydoidothis');
      expect(list[0]).toEqual('whydoidothis');
      expect(list.length).toEqual(1);
    });
    test('It should append an integer to the list', () => {
      let list = new List;
      list.push(23453);
      expect(list[0]).toEqual(23453);
      expect(list.length).toEqual(1);
    });
    test('It should append a boolean value to the list', () => {
      let list = new List;
      list.push(true);
      expect(list[0]).toEqual(true);
      expect(list.length).toEqual(1);
    });
  });

  describe('#pop', () => {
    test('It should remove the last value', () => {
      let list = new List;
      list.push('cups');
      list.push('soda');
      list.push('ice');
      let result = list.pop();
      expect(result).toEqual('ice');
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);
    });
    test('It should remove the last integer', () => {
      let list = new List;
      list.push(77);
      list.push(277);
      list.push(772);
      let result = list.pop();
      expect(result).toEqual(772);
      expect(list.length).toEqual(277);
    });
    test('If nothing to pop, should return undefined', () => {
      let list = new List();
      let result = list.pop();
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
    });
    test('It should return sum of all numbers concatenated onto string', () => {
      let list = new List();
      list.push(1);
      list.push(2);
      list.push('fora');
      let result = list.reduce((a, c) => a + c);
      expect(result).toEqual('3fora');
    });
    test('It should return all names concatenated back together', () => {
      let list = new List();
      list.push('soda');
      list.push('cups');
      list.push('ice');
      let result = list.reduce((a, c) => a + c);
      expect(result).toEqual('sodacupsice');
    });
  });

  describe('#slice', () => {
    test('should return a copy of a portion of numbers into a new array object', () => {
      let list = new List;
      list = [3,4,5,6,7,8];
      expect(list.slice(2, 5)).toEqual([5, 6, 7]);
    });
    test('should return a copy of a portion of strings into a new array object', () => {
      let list = new List;
      list = ['steam', 'water', 'ice', 'frost'];
      expect(list.slice(1, 3)).toEqual(['steam', 'ice']);
    });
    test('should return a copy of a portion of strings, booleans, or numbers into a new array object', () => {
      let list = new List;
      list = ['steam', 2, true, false];
      expect(list.slice(1, 3)).toEqual([2, true]);
    });
  });


  describe('#map', () => {
    test('It should return an altered list', () => {
      let list = [1,2,3];
      let result = list.map((x) => x * 2);
      expect(list.map((x) => x *2 )).toEqual([2, 4, 6]);
      expect(result.length).toBe(3);
    });
    test('It should return an altered list', () => {
      let list = ['ih','mi','nuahs'];
      expect(list.map((x)=>x.split('').reverse().join(''))).toEqual(['hi', 'im', 'shaun']);
    });
    test('It should return an altered list', () => {
      let list = [true,false,2];
      expect(list.map((x)=>x + 2)).toEqual(['hi', 'im', 'shaun']);
    });
  });
});
