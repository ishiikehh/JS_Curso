function tabuada() {
    let nun = document.getElementById('num')
    let tab = document.getElementById('tabuadas')

    if (nun.value.lenght == 0 || nun.value == 0){
        alert('Por favor, digite um numero!')
    } else {
        let n = Number(nun.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}