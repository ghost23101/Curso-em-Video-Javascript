let valores = []

function adicionar() {
    let num = document.getElementById('txtnum')
    let lista = document.getElementById('flista')

    let n = Number(num.value)

    if (num.value.length == 0 || n < 1 || n > 100) {
        alert('Valor inválido')
        return
    }

    if (valores.indexOf(n) != -1) {
        alert('Já existe [ERRO]')
        return
    }
    
    valores.push(n)
    let item = document.createElement('option')

    item.text = `Valor ${n} adicionado`
    lista.appendChild(item)
    res.innerHTML = ""

    num.value = ""
    num.focus()
}

function finalizar() {
    let res = document.getElementById('res')

    if (valores.length == 0) {
        alert('Adicione valores')
        return
    } 

    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0

    for (let i = 0; i < valores.length; i++) {
        let valor = valores[i]

        soma += valor

        if (valor > maior) {
            maior = valor
        }

        if (valor < menor) {
            menor = valor
        }
    }

    let media = soma / total

    res.innerHTML = ""
    res.innerHTML += `Ao todo temos ${total} valores<br>`
    res.innerHTML += `O maior valor é ${maior}<br>`
    res.innerHTML += `O menor valor é ${menor}<br>`
    res.innerHTML += `A soma é ${soma}<br>`
    res.innerHTML += `A média é ${media}<br>`
}