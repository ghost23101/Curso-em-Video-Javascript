function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#e9f0f3'
        // document.body.style.background = '#e9f0f3'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#d1864d'
        // document.body.style.background = '#d1864d'
    } else {
        // Boa noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#292345'
        // document.body.style.background = '#292345'
    }
}