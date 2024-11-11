// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página.

    // Obtendo os valores do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificação simples de login (substitua por lógica real, se necessário)
    if (username === "pet" && password === "12345") {
        // Redireciona para a página de compras
        window.location.href = "index.html"; // Certifique-se de que esse arquivo exista
    } else {
        alert("Usuário ou senha incorretos!"); // Alerta para login falho
    }
});