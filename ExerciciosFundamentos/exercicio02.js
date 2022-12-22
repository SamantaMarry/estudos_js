function qualTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3){
        return console.log( "Equilátero")
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
       return console.log( "Isóceles")        
    } else {
        return console.log( "Escaleno")

    }
}

qualTriangulo(1, 2, 3)