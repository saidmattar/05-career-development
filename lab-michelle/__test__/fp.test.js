'use strict';

const List = require('../lib/fp.js');

describe('Testing List Module:', function() {
  beforeAll(() => this.list = new List())
});

describe('Testing methods in fp.js', function() {
  describe('Testing Push', () => {
    test('should return (1,2,3,4) given (1,2,3) & 4', () => {
      let listOne = new List (1,2,3);
      listOne.myPush(4);
      expect(listOne[3]).toEqual(4);
    });
    test('should return meep', ()=> {
      let listTwo = new List (1, 2, Infinity);
      listTwo.myPush('meep');
      expect(listTwo[3]).toEqual('meep');
    });
    test('should return true', ()=> {
      let listThree = new List ('do not talk about fight club');
      listThree.myPush(true);
      expect(listThree[1]).toEqual(true);
    });
    describe('Testing Pop', () => {
      test('should return 4', ()=> {
        let listOne = new List('happy', 'sad', 'confused', 'sleepy', 'hungry');
        listOne.myPop('hungry');
        expect(listOne.length).toEqual(4);
      });
      test('should return -8', ()=> {
        let listOne = new List ('boop', 0, -8, {5:'cheese'});
        listOne.myPop();
        expect(listOne[2]).toEqual(-8);
      });
      test('should return {}', ()=> {
        let listOne = new List ({},{},{},{},{});
        listOne.myPop();
        expect(listOne[3]).toEqual({});
      });
    });
    //IS THIS METHOD NOT WORKING??
    describe('Testing forEach', () => {
      test('should return 2, 4, 6', ()=> {
        let listOne = new List(1, 2, 3);
        let cb = this[i]*2;
        listOne.myforEach(cb);
        expect(listOne).toEqual(2, 4, 6);
      });
    });
    //IS THIS METHOD NOT WORKING??
    describe('Testing filter', () => {
      test('should return 2, 466, 66', ()=> {
        let listOne = new List(2, 46, 66, 666);
        let callback = listOne.contains(6);
        listOne.myforEach(callback);
        expect(listOne).toEqual(46, 66, 666);
      });
    });
    //IS REDUCE NOT WORKING??
    describe('Testing Reduce', () => {
      test('should return 4', ()=> {
        let listOne = new List(1, 2, 3);
        listOne.myReduce();
        expect(listOne.length).toEqual(1);
      });
    });
  });
});
