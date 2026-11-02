
// 1. Создание переменных
let number1 = 20;
let number2 = 10;
let operator = "+";

// 2. Функция калькулятора
function calculator(number1, number2, operator) {

    let result;

    // 3. Проверка математической операции
    if (operator === "+") {
        result = number1 + number2;
    } 
    else if (operator === "-") {
        result = number1 - number2;
    } 
    else if (operator === "*") {
        result = number1 * number2;
    } 
    else if (operator === "/") {
        if (number2 !== 0) {
            result = number1 / number2;
        } 
        else {
            return "Error: Division by zero";
        }
    } 
    else {
        return "Invalid operator";
    }

    return result;
}

// 4. Вывод результата
let answer = calculator(number1, number2, operator);

console.log("First number:", number1);
console.log("Second number:", number2);
console.log("Operator:", operator);
console.log("Result:", answer);
