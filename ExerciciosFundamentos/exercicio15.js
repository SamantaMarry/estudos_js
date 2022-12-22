function revenda (carro){
    switch(carro){
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedan':
        case 'moto':
        case 'caminhonete':
            console.log('Tem certeza que prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este modelo aqui!')                
    }
}

revenda('moto')
revenda('hatch')
revenda('sedan')
revenda('caminhonete')
revenda('suv')