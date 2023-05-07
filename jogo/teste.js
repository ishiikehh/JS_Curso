
var ganhar = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]] // OPÇÕES VENCEDORAS
var soma = []
var numeros = []

function ganhou(j){
    var jogos = j
    for (c = 0; c in j; c++){
        numeros.push(j[c])
    }

    for (g = 0; g in ganhar; g++){    
        gg = ganhar[g]    
       if(numeros in ganhar[g]){
        var res = 'certo'
        break
       } else {
        var res = 'errado'
       }
       j.sort()
       console.log(ganhar[g], '>', numeros, '=', res);
    }
}

ganhou([1,5,9])