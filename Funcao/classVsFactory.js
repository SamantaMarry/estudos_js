class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`) // acesso o nome do objeto que foi estanciado a partir da classe 
    }
}

console.log (typeof Pessoa) // function

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // nao preciso acessar o nome usando this pq ele tem consciencia do contexto léxico que foi criado
    }
}

const p2 = criarPessoa('João')
p2.falar()
