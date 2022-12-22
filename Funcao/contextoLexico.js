const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}   

function exec() {
    const valor = 'Local' // nao procura no local de execucao, procura no contexto lexico (local em que a funcao foi definida)
    minhaFuncao()
}

exec() // Global - a funcao carrega consigo o contexto lexico no qual ela foi declarada