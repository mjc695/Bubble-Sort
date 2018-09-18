describe('Bubble Sort of integers', function() {
  // beforeAll(function() {
  //   spyOn(window, 'swapHelper').and.callThrough();
  // });

  // let testArray;
  // beforeEach(() => {
  //   swapHelper.calls.count.reset();
  // });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array of 3 items', function() {
    spyOn(window, 'swapHelper').and.callThrough();
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(window.swapHelper.calls.count()).toEqual(3);
  });
  it('sorts an array of 10 items', function() {
    spyOn(window, 'swapHelper').and.callThrough();
    expect(bubbleSort([5, 3, 3, 7, 8, 9, 4, 6, 9, 7])).toEqual([
      3,
      3,
      4,
      5,
      6,
      7,
      7,
      8,
      9,
      9,
    ]);
    expect(window.swapHelper.calls.count()).toEqual(12);
  });
});

describe('Bubble Sort of characters', function() {
  it('sorts an array of letters', function() {
    spyOn(window, 'swapHelper').and.callThrough();
    expect(bubbleSort(['f', 'c', 'g', 'l', 'z', 'B', 'F'])).toEqual([
      'B',
      'F',
      'c',
      'f',
      'g',
      'l',
      'z',
    ]);
    expect(window.swapHelper.calls.count()).toEqual(11);
  });
  it('sorts an array of letters', function() {
    spyOn(window, 'swapHelper').and.callThrough();
    expect(bubbleSort(['F', 'a', 'A', 'f', 'z', 'Z', 'h'])).toEqual([
      'A',
      'F',
      'Z',
      'a',
      'f',
      'h',
      'z',
    ]);
    expect(window.swapHelper.calls.count()).toEqual(6);
  });
});