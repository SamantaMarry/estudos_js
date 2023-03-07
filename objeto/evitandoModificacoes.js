// Object.preventExtensions: Impede a insercao de novos atributos do nosso objeto


const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Estensível: ', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

// Object.seal: Impede a delecao e a insercao de atributos existentes

const pessoa = Object.seal({
    nome: 'Juliana', idade: 55
})

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 25

console.log(pessoa)

// Object.freeze: selado + valores constante === valores nao podem ser modificados nem deletados nem incluidos.
