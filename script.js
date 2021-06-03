function prepararMensagem() {
    var tel = document.getElementById("campoTelefone").value;
    var mensagem = document.getElementById("campoMensagem").value;
    document.getElementById('zap').href = "https://api.whatsapp.com//send?phone=phone=" + tel +"&text=" + mensagem;
    
}