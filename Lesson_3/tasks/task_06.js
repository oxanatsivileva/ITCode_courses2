/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
  const res = [];
  const obj = Object.fromEntries(Object.entries(results).sort((a, b) => b[1] - a[1]));
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    if (value >= 60) {
      res.push(key);
    }
  }
  
  return res;
};

console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))




 












































































module.exports = myLanguages

