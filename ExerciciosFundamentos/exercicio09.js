function notasAlunos(nota){
    let notaArredondada = arredondar(nota)
    if(notaArredondada >= 40){
        return `Aprovado com ${notaArredondada}`
    }else{
        return `Reprovado com ${notaArredondada}`
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }

}

console.log(notasAlunos(84))
console.log(notasAlunos(29))
console.log(notasAlunos(57))
console.log(notasAlunos(38))
console.log(notasAlunos(88))

