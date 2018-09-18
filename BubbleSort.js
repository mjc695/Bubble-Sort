function bubbleSort(array) {
    if (array.length < 2) {
      return array;
    }
  
    let swapped;
    do {
      swapped = false;
      for (var i = 0; i < array.length; i++) {
        if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
          swapHelper(array, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
    return array;
  }
  
  function swapHelper(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }