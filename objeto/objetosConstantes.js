// pessoa tem um endereco nome outro
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'

Object.freeze(pessoa) // congela o objeto: Nao gera um erro mas ignora a tentativa atribuir um novo valor ( nao altera, nao deleta, nao inclui)

