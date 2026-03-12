function contar() {
    var inicio = document.getElementById('txtini') 
    var fim = document.getElementById('txtfim') 
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var pas = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!'
    } else {
        res.innerHTML = 'Contando: <br>'

        if (pas <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            pas = 1
        }

        if (ini < f) {
            // Contagem crescente
            for (var c = ini; c <= f; c += pas) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (var c = ini; c >= f; c -= pas) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}