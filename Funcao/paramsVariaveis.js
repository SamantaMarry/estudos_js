//arguments é um array interno de uma função que contém todos os parametros passados para a função
function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(arguments)