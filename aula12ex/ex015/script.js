function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'foto-mulher-idosa.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}