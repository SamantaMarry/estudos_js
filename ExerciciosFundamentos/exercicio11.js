function anoBixesto(ano) {
    const resto = ano % 4
    if (resto == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBixesto(2020))
console.log(anoBixesto(2021))
