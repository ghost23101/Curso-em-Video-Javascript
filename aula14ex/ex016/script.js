function contar() {
    var inicio = document.getElementById('txtini') 
    var fim = document.getElementById('txtfim') 
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var pas = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || pas <= 0) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!'
    } else {
        res.innerHTML = 'Contando: '

        if (ini < f) {
            for (var c = ini; c <= f; c += pas) {
                res.innerHTML += `${c} 👉`
            }
        } else{
            for (var c = ini; c >= f; c -= pas) {
                res.innerHTML += `${c} 👉`
            }
        }
    }
}