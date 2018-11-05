describe('Bubble Sort', function () {
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });
    let a = [10, -30, -97, 0, 5]
    it('sort an array of intergers', function () {
        expect(bubbleSort(a)).toEqual([-97, -30, 0, 5, 10]);
    });
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); 
    });
    it('gets the swap function called', function () {
        expect(window.swap.calls.count()).toEqual(5);
    });
  });