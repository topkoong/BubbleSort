let a = [10, -30, -97, 0, 5, 12, 51, 6, 15, 99];
let b =[10, -30, -97, 0, 5]
let c = [12, 51, 6, 15, 99];
let d = [1];
let e = [];
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split(a)).toEqual([[10, -30, -97, 0, 5],[12, 51, 6, 15, 99]]);

  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge(b, c)).toEqual([10, -30, -97, 0, 5, 12, 51, 6, 15, 99]);
  });
});


describe('mergeSort function', function() {
    it('is able to sort two unsorted arrays into one sorted array', function() {
      // test the merging algorithm
      expect(mergeSort(a)).toEqual([ -97, -30, 0, 5, 6, 10, 12, 15, 51, 99 ]);
    });
      it('prints out the provided array when passing an array with a length of 1', function() {

        expect(mergeSort(d)).toEqual([1]);
    });

    it('is able to pass an empty array', function() {

        expect(mergeSort(e)).toEqual([]);
    });
});