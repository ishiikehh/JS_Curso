let nun = document.getElementById('addnun') // recebe o valor do HTML no id addnun
let res = document.getElementById('res') // recebe o valor do HTML no id res
let fin = document.getElementById('final') // recebe o valor do HTML no id final
let vetor = [] // cria um vetor

function isNumero(n){ // verifica se é um numero valido entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // verifica se o numero ja esta no vetor
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function analizar(){ // recebe o numero do HTML e adiciona em um option
    if (isNumero(nun.value) && !inLista(nun.value, vetor)){ // chama as funcoes numero e index lista
        vetor.push(Number(nun.value)) // adiciona o numero no vetor
        let opt = document.createElement('option') // cria a tag option
        opt.text += `Valor ${nun.value} adicionado` // coloca isso no conteudo do option
        res.appendChild(opt) // adiciona o conteudo a uma tag filho e escreve-o no HTML
        final.innerHTML = '' // limpa o analizador final, função abaixo

    
    } else { // caso falso, informa alerta
        alert('Numero nao encontrado ou invalido')
    }
    nun.value = '' // faz com que o input esvazie sempre que chamar a função
    nun.focus() // volta o cursor para o input
  

}


function finalizar(){ // analiza todas as informações do vetor
    if (vetor.length == 0){ // caso o vetor vazio, informa como alerta
        alert('Digite um valor primeiro')
    } else{// caso falso, analiza
        let soma = 0
        for (let c in vetor){ // soma os valores informados
            soma += vetor[c]
        }
        let media = soma / vetor.length // calcula a media
        let maior = vetor[0] // maior numero
        let menor = vetor[0] // menor numero
        for (let pos in vetor){ // calcula o maior
            if (vetor[pos] > maior){
                maior = vetor[pos]
            } 
            if (vetor[pos] < menor){ // calcula o menor
                menor = vetor[pos]
            } 
        }

        fin.innerHTML = `Ao todo, temos cadastrado: ${vetor.length} numeros<br>` // exibe o valor de cadastros
        fin.innerHTML += `O maior numero informado foi: ${maior}<br>` // exibe o valor maior
        fin.innerHTML += `O menor numero informado foi: ${menor}<br>` // exibe o valor menor
        fin.innerHTML += `A soma de todos foi: ${soma}<br>` // exibe o valor soma
        fin.innerHTML += `A media de todos é: ${media}` // exibe o valor media
    }
}