let dig = document.getElementById('dig')
let res = document.getElementById('res')
let invalidCPF = [00000000000, 11111111111, 22222222222, 33333333333, 44444444444, 55555555555, 66666666666, 77777777777, 88888888888, 99999999999]

function digCPF(m, op){
    let soma = 0
    for (let d in dig.value){
        if (d <= op){
            let conta = m * dig.value[d]
            soma += conta
            m--
            
        }
    }
    soma = soma % 11
    if (soma == 0){
        soma = 0
    } else {
        soma = 11 - soma
    }
    return soma
}


function digCNPJ(m, op){
    let soma
    for (let d in dig.value){
        if (d <= op){
            
        }
    }

}

function resu(d1, d2, t){
    if (t == 1 && d1 == dig.value[9] && d2 == dig.value[10]){
        return `CPF ${dig.value} é <span id="val">Valido</span>`
    } else {
        return `${dig.value} é <span id="inv">Invalido</span>`
    }
}


function validar(){

    if (dig.value in invalidCPF){

    } else {
    if (dig.value.length == 11){
        let dig1 = digCPF(10, 8)
        let dig2 = digCPF(11, 9)
     
        res.innerHTML = resu(dig1, dig2, 1)

    } else if (dig.value.length == 14) {
        res.innerHTML = `CNPJ: ${dig.value}`
    } else {
        
        dig.focus()
        alert('CPF ou CNPJ Invalido. Digite Novamente')
        
        
    }
    }
    dig.value= ''
    
    
}