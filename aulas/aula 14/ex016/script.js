function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Falta dados. verifique')
        res.innerHTML = 'Impossivel Contar'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0){// passo 0 = passo 1
            alert('Não é possivel usar passo 0. considerando passo 1')
            p = 1
        }
        if (i < f){// contagem progressiva
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        } else {//contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`
        }
    }
