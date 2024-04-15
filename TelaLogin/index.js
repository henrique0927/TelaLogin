function salvarDados() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;

    var usuario = {
        nome, 
        email,
        age,
        password
    };
    alert("Login Enviado.");
    console.log(usuario);
};
