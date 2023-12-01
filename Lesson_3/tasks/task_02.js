/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    let reversedWord = str.split('').reverse().join('');
    let result = (str === reversedWord) ? true : false;
    return result;
}

console.log(isPalindrome('aasdd'))


















































module.exports = isPalindrome