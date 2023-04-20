var msg = document.querySelector('.texts')
var tela = document.querySelector('section')
var but = document.getElementById('sub')

function enviar(){
    tela.innerHTML += `<p id="d586" class="msgg">${msg.value}</p>`
    but.innerText = ''
}