function calculadora(number1, operator, number2){

    switch(operator){
        case '+':
            return number1 + number2
        case '-':
            return number1 - number2
        case '/':
            return number1 / number2
        case '*':
            return number1 * number2    
        default:
            return 'Operaçao inválida'          
    }
}

console.log(calculadora(2, '+', 2))
console.log(calculadora(3, '-', 2))
console.log(calculadora(16, '/', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(2, 'a', 2))