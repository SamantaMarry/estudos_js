// Closure é o ecopo criado quando a funcao e declarada - envolve a funcao
// Esse ecopo permite a funcao acessar e manipular variaveis externas a funcao

// Contexto lexico em acao
const x = 'Global'

function fora() { // funcao lembra das suas origens - local onde foi declarado
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local - a funcao carrega consigo o contexto lexico no qual ela foi declarada