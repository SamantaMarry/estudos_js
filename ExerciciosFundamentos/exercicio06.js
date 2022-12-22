function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){

    let resultado = capitalInicial + (capitalInicial * taxaJuros *tempoAplicacao)

    return console.log (`Juros Simples ${resultado}`)

}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){

    let resultado = capitalInicial * ( 1+ taxaJuros) ** tempoAplicacao

    return console.log (`Juros Composto ${resultado}`)

}

jurosSimples(100, 10/100, 2)
jurosCompostos( 100, 10/100, 2)