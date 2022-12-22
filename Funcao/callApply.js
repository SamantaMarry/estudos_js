function getpreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getpreco
}

global.preco = 20
global.desc = 0.1
console.log(getpreco()) // nesse caso o this aponta para o objeto global - chama a funçao direto

console.log(produto.getpreco()) // nesse caso o this aponta para o objeto produto - chama a funçao a partir do objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getpreco.call(carro)) // nesse caso o this aponta para o objeto carro
console.log(getpreco.apply(carro)) // nesse caso o this aponta para o objeto carro


console.log(getpreco.call(carro, 0.17, '$')) // o primeiro é o contexto, os demais sao os parametros
console.log(getpreco.apply(global, [0.17, '$'])) // o primeiro é o contexto, os demais sao os parametros

// o call e o apply sao formas de chamar uma funcao passando o contexto e os parametros  
// a diferença é que o call passa os parametros separados por virgula e o apply passa os parametros em um array