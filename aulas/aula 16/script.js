function parimp(n){ // Abre uma função ParImpar
    if (n % 2 == 0){ // Verifica se é divisivel por 2
        return 'É Par' // retorna par
    } else {
        return 'É Impar' // retorna impar
    }
}
let res = parimp(41) // variavel de controle dentro da chamada da função
console.log(res) // imprime o resultado
console.log(parimp(4)) // chama sem declarar variavel 

//
function soma(n1 = 0, n2 = 0){ // voce pode predefinir um resultado para evitar erros
    return n1 + n2
}
console.log(soma(6)) 

//
let v = function(x){ // voce pode colocar uma funçao dentro de uma variavel
    return x**2 // potencia
}
console.log(v(5)) // mostra resultado 

//
function fat(n){ // função fatorial
    let fat = 1 // inicia a variavel em 1
    for (let c = n; c > 1; c--){ // laco para fatorar o numero
        fat *= c // calcula o fator
    }
    return fat // exibe resultador
}
console.log(fat(5)) 

//
function fat(n) { // função fatorial
    if (n == 1){ // fatorial de 1
        return 1
    } return n * fat(n-1) // calcula o fatorial chamando o fatorial
}
console.log(fat(5)) // exibe resultados