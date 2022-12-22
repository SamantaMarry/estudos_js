let stringPontuacoes = "0, 0, 0, 4, 1, 25, 0, 3, 5, 0"


function registroPontuaçao (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = Math.max.apply(pontuacoes)
    let menorPontuacao = Math.min.apply(pontuacoes)

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(registroPontuaçao(stringPontuacoes))
