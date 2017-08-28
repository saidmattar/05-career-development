'use strict';

const List = require('../lib/fp.js');

describe('Testing List Module:', function() {
  beforeAll(() => this.list = new List());
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
    //TESTING MAP - NOT FUNCTIONAL
    describe('Testing Map', () => {
      test('should return 2, 4, 6', ()=> {
        let listOne = new List(1, 2, 3);
        let callback = listOne.myMap((ele) => ele*2);
        //so annoying, it has to be something like that ^
        expect(callback).toEqual(2, 4, 6);
      });
    });
    //TEST FOR FOREACH IS NOT WORKING SO I STOPPED WORKING ON IT - I can't figure out where to put the callback in here
    describe('Testing forEach', () => {
      test('should return 2, 4, 6', ()=> {
        let listOne = new List(1, 2, 3);
        let callback = listOne.myForEach((ele) => ele*2);
        //so annoying, it has to be something like that ^
        expect(callback).toEqual(2, 4, 6);
      });
    });
    //FILTER - TEST NOT WORKING SO I STOPPED WORKING ON IT - again, not sure where the callback should live
    describe('Testing Filter', () => {
      test('should return 46, 66, 666', ()=> {
        let listOne = new List(2, 46, 66, 666);
        let callback = listOne.myFilter((ele) => ele > 10);
        expect(callback).toEqual(46, 66, 666);
      });
    });
    //IS REDUCE NOT WORKING?? UGHHHHHHHHH
    describe('Testing Reduce', () => {
      test('should return 1', ()=> {
        let listOne = new List(1, 2, 3);
        let callback = listOne.myReduce();
        expect(callback).toEqual(1);
      });
    });
    //IS SLICE NOT WORKING? SEEMS LIKE IT SHOULD
    describe('Testing Slice', () => {
      test('should return 1, 2', ()=> {
        let listOne = new List(1, 2, 3);
        expect(listOne.mySlice(0,1)).toEqual(1,2);
      });
    });
  });
});
