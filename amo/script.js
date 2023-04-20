var check = document.querySelector('.input')
var luz = document.querySelector('.trapezio')
const isChecked = check.checked;
console.log('ola');
setInterval(function lumina(){
    if (isChecked) {
        luz.style.backgroundColor = 'white'
        
    } else {
        luz.style.backgroundColor = 'black'
    }
}, 100)