function Carro (velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // Instanciando a funcao construtora sem passar parametros (sem parenteses)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// Visao do js orientado a objetos - pode criar atributos e metodos publicos e privados

console.log(typeof Carro) // function
console.log(typeof ferrari) // object - intanciado a partir de uma funcao construtora