function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    // Array contendo objetos de usuários
    const usuarios = [
        { usuario: "admin", senha: "admin" },
        { usuario: "victor", senha: "12345" },
        { usuario: "marcos", senha: "54321" }
    ];

    // Verifica se existe um usuário válido
    const usuarioValido = usuarios.find(u => u.usuario === login && u.senha === senha);

    if (usuarioValido) {

        document.getElementById('loading').style.display = 'block';

        setTimeout(() => {
            location.href = "dashboard.html";
        }, 1500); 
    } else {
        alert('Login ou senha incorretos!');
    }
}
