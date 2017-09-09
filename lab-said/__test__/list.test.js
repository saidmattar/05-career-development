'use strict';

const List = require('../lib/list');

describe('Testing List Module:', function() {
  beforeAll(() => this.list = new List());
  afterAll(() => delete this.list);

  describe('Given a new instance it...', () => {
    test('should have a length property of 0' , done => {
      expect(this.list.length).toBe(0);
      done();
    });
  });
});

describe('list.js' , () => {
  beforeAll(() => this.list = new List({ name : 'a', age: 25 },{name: 'b', age: 30}));
  describe('#map', () => {
    test('should return return a new list with modified objects' , () => {
      let newList = this.list.map(ele => {
        return {
          firstName: ele.name,
          daysOld: ele.age*365,
        };
      });
      expect(newList[0].firstName).toBe('a');
      expect(newList[0]).toHaveProperty('firstName');
      expect(newList[0].daysOld).toBe(9125);

    });
  });
});

describe('#push', () => {
  test('It should append a string to the list', () => {
    let list = new List;
    list.push('myNewString');
    expect(list[0]).toEqual('myNewString');
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
