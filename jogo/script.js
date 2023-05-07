// PEGA TODOS OS CAMPOS JOGAVEIS
let div1 = document.querySelector('#d1')
let div2 = document.querySelector('#d2')
let div3 = document.querySelector('#d3')
let div4 = document.querySelector('#d4')
let div5 = document.querySelector('#d5')
let div6 = document.querySelector('#d6')
let div7 = document.querySelector('#d7')
let div8 = document.querySelector('#d8')
let div9 = document.querySelector('#d9')

// ARRAYS DE JOGO
var jogar = [div1, div2, div3, div4, div5, div6, div7, div8, div9] // OPÇÕES
var ganhar = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]] // OPÇÕES VENCEDORAS
var clicados = [] //USUARIO
var pcselect = [] //PC

// ICONE DO XIS BOOTSTRAP
let xis = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`

// ICONE DA BOLA BOOTSTRAP
let bola = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-circle danger" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>`

// FUNÇÕES PARA A LOGICA DE JOGO
function cliquei(nun){ // FUNÇÃO PARA O XIS
    jogar[nun-1].innerHTML = xis
    clicados.push(nun) 
    sorteia()
    ganhou()
}

function bolinha(n){ // FUNÇÃO PARA A BOLA
    jogar[n-1].innerHTML = bola
    clicados.push(n)
    ganhou()
}

function sorteia(){ // SORTEIA UM NUMERO INTEIRO ENTRE 1 E 9
    min = Math.ceil(1)
    max = Math.floor(9)
    let sorte = Math.floor(Math.random() * (max - min) + min)
    bolinha(sorte)
}

function ganhou(){
    for (let count = 0; count in ganhar; count++) {
            console.log(ganhar[count]);
    }
}