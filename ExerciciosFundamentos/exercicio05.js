function duasCasasDepoisDaVirgula (valor){
    let numero = valor

    numero = numero.toFixed(2).toString().replace(".", ",")
    
    return console.log (`R$ ${numero}`)
}

duasCasasDepoisDaVirgula(1.0 + 1.3)