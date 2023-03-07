// Json === formato de dados comunica sistemas feitos em tecnologias completamente diferentes
// formato textual e super simples lido em qualquer linguagem
// usado em comunicacao entre sistemas

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj)) // transforma somente os atributos em texto

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // gera um json
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))




