const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); //todas as chaves
console.log(Object.values(pessoa)); // todos os valores
console.log(Object.entries(pessoa)); // array com arrays de 2 elementos chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
}); // mostra o objeto

Object.defineProperty(pessoa, 'dataNascimento', { // define uma propriedade - pode ou nao ser alterada? vai aparecer quando fizer .keys?
    enumerable: true, // listada? .keys
    writable: false, // vai ser modificada?
    value: '01/01/2019' // valor que vai receber
})

console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4}

const obj = Object.assign(dest, o1, o2) // joga tudo pra dentro de um só

console.log(obj)
Object.freeze(obj) // congela o objeto para nao ser alterado