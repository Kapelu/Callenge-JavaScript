const {    
    bubbleSort,
    insertionSort,
    selectionSort,
    quickSort,
  mergeSort,
  } = require('../08-Algoritmos/08-Algoritmos.js');
  

  describe('bubbleSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(bubbleSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(bubbleSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });
  
  describe('insertionSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(insertionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(insertionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });
  
  
  describe('selectionSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(selectionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(selectionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });


  describe('quickSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(quickSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(quickSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });
  
  describe('mergeSort(array)', function() {
    it('Debe retornar el array ordenado de menor a mayor', function() {
      expect(mergeSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
      expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
      expect(mergeSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
    });
  });