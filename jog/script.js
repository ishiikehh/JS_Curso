const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
let head = document.getElementById('reload')
let pontos = document.getElementById('pontos')
let recorde = document.getElementById('recorde')
let pt = 0

const jump = function pular() {
    mario.classList.add('jump')

    setTimeout(function remover(){
        mario.classList.remove('jump')
    }, 500)
    
}

const loop = setInterval(function ver(){

    

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${pipePosition}px`

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '10px'
       
        
        
        head.innerHTML = '<meta http-equiv="refresh" content="0;url=index.php?game=over" />'

        clearInterval(loop)
        
            
    } 
    
}, 10)
 
const pts = setInterval(function pnt(){
    const pipePontua = pipe.offsetLeft
    
        pontos.innerHTML = `Pontos: ${pt}`
        pt = pt + 1
    
}, 1500)
    
document.addEventListener('keydown', jump)