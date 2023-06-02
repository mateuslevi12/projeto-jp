function logar () {
    var login = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var lembrarSenha = document.getElementById('lembrarSenha').checked
    var aviso = document.getElementById('aviso')

    if (login == "mateus" && senha == "12345678") {
        if(lembrarSenha) {
            localStorage.setItem('senha', senha)
            localStorage.setItem('usuario', login)
        } 
        location.href = "avaliação.html"
    }
    else if (login == "levi" && senha == "87654321") {
        if(lembrarSenha) {
            localStorage.setItem('senha', senha)
            localStorage.setItem('usuario', login)
        } 
        location.href = "pagina-inicial.html"
    }
    else if (login == '' || senha == '' ) {
        aviso.innerText = 'Preencha todos os campos *'

    }
    else if (login !== 'mateus' && login !== "levi" || senha !== "12345678" && senha !== "87654321") {
        aviso.innerText = 'Usuário inválido *'
    }
}  

window.onload = function() {
    var senhaSalva = localStorage.getItem('senha');
    var usuarioSalvo = localStorage.getItem('usuario');
    if (senhaSalva) {
      document.getElementById('senha').value = senhaSalva;
      document.getElementById('email').value = usuarioSalvo;
    }
  };

function mostrarSenha() {
    var campoSenha = document.getElementById('senha');
  
    if (campoSenha.type === 'password') {
        campoSenha.type = 'text';
    } else {
        campoSenha.type = 'password';
    }
}