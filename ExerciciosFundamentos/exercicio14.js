function fruteiraSemFruta (fruta) {
    switch(fruta){
        case "maça":
            console.log( "Não vendemos essa fruta aqui")
            break
        case "kiwi":
            console.log( "Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log( "Aqui está, são 3 reais o quilo")
            break
        default:
             return console.log("fruta inválida"); 
            
    }

}

fruteiraSemFruta("maça")
fruteiraSemFruta("kiwi")
fruteiraSemFruta("melancia")
fruteiraSemFruta("laranja")