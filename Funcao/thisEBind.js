const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// bind: amarra o this ao objeto pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()
