const {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
} = require('../01-Arrays/01-arrays.js')

describe('invertirOrden(array)', function() {
    it('Deberia retornar un array con los elementos invertirdos del array que recibe por parametro', function (){
       expect(invertirOrden([1, 4, 24, 10, 8])).toStrictEqual([8, 4, 1])
       expect(invertirOrden([2, 30, 5, 3, 15])).toStrictEqual([3, 5, 2])
    })
})

describe('numeroEnComun(array1, array2)', function() {
    it('Deberia retornar el numero en comun entre los arrays que recibe por parametro, en caso de no haber numero en comun de, devolver el numero mas pequeño', function() {
      expect(numeroEnComun([10, 15, 24], [2, 19, 10])).toBe(10);
      expect(numeroEnComun([2, 3, 15], [1, 4, 15])).toBe(15)
    });
    it('Deberia retornar el numero mas chicho en caso de que no haya numeros en comun entre ambos arrays', function(){
        expect(numeroEnComun([3, 6, 10, 11], [2, 4, 5, 9])).toBe(2);
        expect(numeroEnComun([1, 6, 10, 11], [3, 4, 5, 9])).toBe(1);
    });
});


describe('sumaDeArrays(array)', function() {
    it('Deberia retornar un array solo con elementos de tipo numero', function() {
      expect(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2])).toEqual([4, 30, 9, 2])
      expect(sumaDeArrays([[5, 5], 4, [10, 15], [25, 10]])).toEqual([10, 4, 25, 35])
    })
});


describe('mismoValorMismosElementos(numero, divisor)', function() {
    it('Deberia retornar un array con la misma cantidad de elemento que el divisor y cada uno de los elementos del mismo valor', function (){
        expect(mismoValorMismosElementos(10, 2)).toEqual([5, 5])
        expect(mismoValorMismosElementos(13, 7)).toBeFalsy()
        expect(mismoValorMismosElementos(100, 4)).toEqual([25, 25, 25, 25])
    })
});

describe('elementoMenorYMayor(array)', function() {
    it('Deberia retornar un array solo con el elemento menor y mayor que recibe por parametro', function (){
        expect(elementoMenorYMayor([10, 15, 24])).not.toContain(15)
        expect(elementoMenorYMayor([2, 4, 9, 1])).not.toContain(4)
        expect(elementoMenorYMayor([10, 15, 24])).toContain(10, 24)
        expect(elementoMenorYMayor([2, 4, 9, 1])).toContain(1, 9)
    })
});

