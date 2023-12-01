/*
* Классическая задача, которую можно встретить на собеседованиях самого разного уровня.
*  Стоит напомнить, что последовательность Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих.
*  Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
*
* Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности,
*  причем n — число, которое передается в качестве аргумента функции.
*
* Эта задача включает прохождение по циклу такое количество раз,
*  которое указано в аргументе, с возвратом значения на соответствующей позиции. Этот способ постановки задачи требует использования циклов.
*  Вы можете использовать рекурсию
* */

function fibonacci(num) {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(2))














































module.exports = fibonacci