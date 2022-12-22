console.log(7 / 0) // não gera erro gera infinity
console.log ("10" / 2) // funciona com uma string
console.log('3' + 2) // não soma, concatena ( a string ganha pois faz sentido no mundo da string)
console.log('3' - 2) // subtrai
console.log ("show!" * 2) // gera NaN
console.log (0.1 + 0.7) // gera uma imprecisão
// console.log (10.toString()) não consegue chamar o literal mais função
console.log((10.345).toFixed(2)) // mas consegue chmar o literal dentro de parentes e chamar função sem ter que armazenar na variavel
