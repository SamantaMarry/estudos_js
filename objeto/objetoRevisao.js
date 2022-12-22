// colecao dinamica de pares chave e valor

const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietário: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function(){
        console.log("O valor do seguro é: 50.000,00")
    }
}

carro.calcularValorSeguro()
carro.proprietário.endereço.logradouro = 'Av. Gigante'

console.log(carro)
console.log(carro.condutores.length)
carro.proprietário.endereço.numero = 500
console.log(carro)


