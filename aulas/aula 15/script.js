let lista = [1, 3, 4, 8]

lista[4] = 7 // adiciona no index selecionado
lista.push(6) // adiciona em um index novo

lista.sort() // metodo para colocar o vetor em ordem

console.log(`Nosso vetor é: ${lista}`) // imprime no console o valor da lista/vetor

console.log(`Nosso vetor tem: ${lista.length} posições`) // mostra o tamanho da lista/vetor

for (let c = 0; c < lista.length; c++){ // repetição com declaracao de variavel, condição e incremento
    console.log(`Na posição ${c} tem: ${lista[c]}`) // imprime a repetição
}

console.log('Simplificando...')
for (let c in lista){ // como no Python.. temos o for CADA in VETOR faça:
    console.log(`Na posição ${c} tem: ${lista[c]}`) // imprime a repetição
}

let valor = 5 // variavel de controle
let ind = lista.indexOf(valor) // indexOf acha a posição que o item se encontra no vetor
if (ind < 0){ // verifica se o valor de resposta nao é -1
    console.log(`O valor \'${valor}\' não foi encontrado`) // caso seja, mostrar erro
} else {
console.log(`O valor \'${valor}\' esta na posição: ${ind}`) // caso não, mostre resposta // o contrabarra é para a aspas funcionar (escape)
}