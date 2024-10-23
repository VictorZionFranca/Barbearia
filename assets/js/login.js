function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    const usuarios = [
        { usuario: "admin", senha: "admin" },
        { usuario: "victor", senha: "12345" },
        { usuario: "marcos", senha: "54321" }
    ];

    const usuarioValido = usuarios.find(u => u.usuario === login && u.senha === senha);

    if (usuarioValido) {
        document.getElementById('loading').style.display = 'block';
        localStorage.setItem('usuarioAutenticado', 'true');

        setTimeout(() => {
            location.replace("dashboard.html"); // Usa replace para não manter o histórico
        }, 650);
    } else {
        alert('Login ou senha incorretos!');
    }
}