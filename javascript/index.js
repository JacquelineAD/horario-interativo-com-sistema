function carregarHorario() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img') 
    var descricao = window.document.getElementById('descricao')
    var data = new Date() 
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagem/manha.png'
        document.body.style.background = '#738AD8'
        descricao.innerHTML = "Bom dia! Não esqueça de tomar um café da manhã reforçado!"
    } else if (hora >= 12 && hora <= 18 ) {
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#CE728F'
        descricao.innerHTML = "Bom tarde! Espero que sua tarde seja ótima!"
    } else {
        img.src = 'imagem/noite.png'
        document.body.style.background = '#05447C'
        descricao.innerHTML = "Bom noite! Tome um banho e relaxe, você trabalhou duro!"
    }
}
