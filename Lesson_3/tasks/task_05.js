/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    res =  res / array.length;
    return Number(Math.round(res) === res ? res : res.toFixed(1))
}
console.log(abs([ 11, 15, 12, 123, 624, 52123, 8341234 ]))








 





























module.exports = abs