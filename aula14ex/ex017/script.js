function tabuada() {
    let numero = document.getElementById('txtnum')
    let selecao = document.getElementById('seltab')
    let res = document.getElementById('res')
    
    let n = Number(numero.value)

    if (numero.value.length == 0) {
        res.innerHTML = 'Digite um número para gerar a tabuada.'
        selecao.innerHTML = ""
    } else {
        res.innerHTML = ""
        selecao.innerHTML = ""

        for (let i = 1; i <= 10; i++) {
           let item = document.createElement('option')
           
           item.value = `tab${i}`
           item.text = `${n} x ${i} = ${n * i}`

           selecao.appendChild(item)
        }
    }
}