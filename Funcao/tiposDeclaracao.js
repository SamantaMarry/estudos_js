console.log(soma(2, 3)); // funciona antes da declaracao da funçao pq primeiro o interpretador do js carrega as funçoes


// function declaration - pode ser chamada antes da declaracao
function soma(x, y) {
    return x + y;
}

// function expression - nao pode ser chamada antes da declaracao
const sub = function (x, y) {
    return x - y;
}

// named function expression
const mult = function mult(x, y) {
    return x * y;
}

