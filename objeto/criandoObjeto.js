// Anotaçao literal de Objetos

const obj1 = {}
console.log(obj1)

// Object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//  funcoes construtoras

function Produto (nome, preco, desconto){
    this.nome = nome //this = publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('lapis', 2998.99, 0.25, 0.15)
console.log (p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory: Pode usar tanto funcao contrutora, quanto funcao literal
// factory é um padrao de projeto. Funcao que fabrica alguma coisa

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('Samanta', 7980, 4)
const f2 = criarFuncionario ('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// funcao famosa que retorna Objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

