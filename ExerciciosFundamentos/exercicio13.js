function diaUtil (dia){
    switch (dia){
        case 1:
        case 7:
            return 'Fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
        default:
            return 'Dia inválido'
    }
}

console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(3))
console.log(diaUtil(10))