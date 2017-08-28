const List = require('../lib/list');

describe('Testing List and associated methods', () => {
  describe('#List', () => {
    test('create new list from user input', () => {
      let list = new List('this', 'is', 'a', 'new', 'list');
      expect(list[0]).toEqual('this');
      expect(list.length).toEqual(5);
    });
    test('create new list from user input', () => {
      let list = new List(1, 2, 3, 'one', 'two', 'three');
      expect(list[3]).toEqual('one');
      expect(list[5]).toEqual('three');
    });
  });

  describe('#push', () => {
    test('Push will add user input to the existing list', () => {
      let list = new List;
      list.push('This is a new list item');
      expect(list[0]).toEqual('This is a new list item');
      expect(list.length).toEqual(1);
    });
  });

  describe('#pop', () => {
    test('Test should pop out the last item in the list', () => {
      let list = new List;
      list.push(33);
      list.push(32);
      list.push(31);
      let result = list.pop();
      expect(result).toEqual(31);
      expect(list.length).toEqual(2);
    });
    test('Test should pop out the last item in the list', () => {
      let list = new List;
      list.push('one');
      list.push('seven');
      list.push('fourteen');
      let result = list.pop();
      expect(result).toEqual('fourteen');
      expect(list.length).toEqual(2);
    });
  });

  describe('#reduce', () => {
    test('It should return sum of all numbers', () => {
      let list = new List();
      list.push(-1);
      list.push(1);
      list.push(-1);
      let result = list.reduce((acc, curr) => acc + curr);
      expect(result).toEqual(-2);
    });

  });

  describe('#slice', () => {
    test('should "make sure to not stare into the eclipse"', () => {
      let list = new List;
      list = ['make', 'sure', 'to', 'not', 'stare', 'into', 'the', 'eclipse'];
      expect(list.slice(4, 8)).toEqual(['stare', 'into', 'the', 'eclipse']);
    });
    test('should return a 4, 5, 6', () => {
      let list = new List;
      list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(list.slice(3, 6)).toEqual([4, 5, 6]);
    });
  });

  // Need #filter
  // Need #describe
});
