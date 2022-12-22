function calculeFatorial(numero){
    if(numero == 0){
        return 1
    } else {
        return numero * calculeFatorial(numero - 1)
    }
}

console.log(calculeFatorial(5))