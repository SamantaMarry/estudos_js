// codigo nao executavel
//Paradigma procedural - foco em procedimento, na função... um trecho de código com nome e reutilizado

//ex.: Funçoes que manipulam dados

processamento(valor1, valor2, valor3) 

// Paradigma de OO - Orientado à objetos 
// dados e dentro dos dados tenho funçoes 

//ex.: objeto funciona como uma cápsula que agrupa comportamentos e atributos
// a intenção é levar mais para o mundo real que é formado por objetos que se relacionam com outros de maneira simplificada

objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){

    }
}

objeto.processamento()

// Principios importantes da OO
//1- Abstração = simplificar os sistemas. Entender que eles demandam informaçoes diferentes do mesmo objeto
// que deve ser abstraido para diferentes necessidades. Ex.: Um objeto carro em um sistema do detram e de uma oficina de carros
//2- Encapsulamento = Ter detalhes de implementacao escondidos. Mostrar apenas o que é necessário. Nao preciso aprender os detalhes
// de um carro para aprender a usar eles, mas a interface de comunicação entre eu e o carro é importante que eu conheça
//3- Herança (prototype) = Formas de reuso de código: Composiçao = Baseado na relação tem um. Carro é composto por um motor, gera objetos complexos a partir da 
//composição de objetos mais simples Herança = Baseado na relação é um. Recebe atributos e comportamentos de um objeto pai (em js a herança é a partir de prototipos)
// mamifero é um animal, mas nem todo animal é um mamifero. Prioriza a composição ao invés da herança a herança pode trazer confusão
//4 Polimorfismo = multiplas formas. Usar o conceito de carro para vários modelos de carro
