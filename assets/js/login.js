function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso!');
        location.href = "index.html";
    } else {
        alert('Login ou senha incorretos!');
    }

}