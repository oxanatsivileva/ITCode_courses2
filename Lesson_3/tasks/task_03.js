/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    str = [...str];

    let res = str.filter(i => vowels.includes(i));
    return res.length;
}

console.log(getVowelsCount('feyad'))




 








































module.exports = getVowelsCount