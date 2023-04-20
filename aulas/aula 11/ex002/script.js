function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Dados insuficientes')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/cri_masc.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/ado_masc.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/adu_masc.png')
            } else  if (idade < 120) {
                img.setAttribute('src', 'img/ido_masc.png')
            } else  if (idade < 150) {
                genero = 'Esqueleto Masculino'
                img.setAttribute('src', 'img/esqueleto.png')
            } else {
                genero = 'Fossel'
                img.setAttribute('src', 'img/fossel.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/cri_femi.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/ado_femi.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/adu_femi.png')
            } else if (idade < 120){
                img.setAttribute('src', 'img/ido_femi.png')
            } else  if (idade < 150) {
                genero = 'Esqueleto Feminino'
                img.setAttribute('src', 'img/esqueleto.png')
            } else {
                genero = 'Fossel'
                img.setAttribute('src', 'img/fossel.png')
            }
        }
        
        
        res.innerText = `Detectamos um ${genero} de ${idade} anos` 
        res.appendChild(img)

        if (fsex[0].checked){
            document.body.style.background = 'rgba(0, 81, 255, 0.671)'
        } else {
            document.body.style.background = 'rgba(255, 0, 0, 0.671)'
        }
    }   
}