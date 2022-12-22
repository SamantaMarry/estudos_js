function aumentoSalario(plano, salario){
    switch (plano){
        case 'A':
           return salario + (salario * 0.10)
        case 'B':
            return salario + (salario * 0.15) 
        case 'C':
            return salario + (salario * 0.20)
        default:
            return 'Plano inválido'        
    }
}

console.log(aumentoSalario('A', 1000.00))
console.log(aumentoSalario('B', 1000.00))
console.log(aumentoSalario('C', 1000.00))
console.log(aumentoSalario('D', 1000.00))
