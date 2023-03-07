// cria mecanismo de reuso de código - heranca ou composicao? composicao. Heranca só tem um objeto pai. 
// composicao pode ser usado em diversos lugares
//JS usa heranca baseada em prototipo

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)