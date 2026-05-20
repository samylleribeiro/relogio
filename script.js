function relogio() {
    // data atual
    let agora = new Date();
    let resultado = document.getElementById("relogio");
    let semanaDiv = document.getElementById("semana");
    let dataDiv = document.getElementById("data");
    let horaDiv = document.getElementById("hora");
    // dia da semana
    let semana = agora.getDay();
    if (semana == 0) semana = "Domingo";
    if (semana == 1) semana = "Segunda-Feira";
    if (semana == 2) semana = "Terça-Feira";
    if (semana == 3) semana = "Quarta-Feira";
    if (semana == 4) semana = "Quinta-Feira";
    if (semana == 5) semana = "Sexta-Feira";
    if (semana == 6) semana = "Sabado";

    // Ano, mês, dia atual
    let ano = agora.getFullYear();
    let mes = agora.getMonth();
    mes = mes + 1;
    let dia = agora.getDate();

    // hora, minutos, segundos atual
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Formata para ficar com o zero na frente (ex: 09:05:02)
    if (hora < 10) hora = "0" + hora;
    if (minutos < 10) minutos = "0" + minutos; // no seu estava minutos, ajustado para segurança
    if (segundos < 10) segundos = "0" + segundos;
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;

    // resultado na tela usando a nova div 'relogio'
   semanaDiv.innerText = semana;
   horaDiv.innerText = `${hora}:${minutos}:${segundos}`;
   dataDiv.innerText = `${dia}/${mes}/${ano}`;
}
relogio();
setInterval(relogio, 1000);
function toggleDarkMode() {
   // lida e desliga o modo noturno
   document.body.classList.toggle("dark-mode");
   // 2. Pega o botão lá no HTML pelo ID dele
    let botao = document.getElementById("btn-noturno");   
    // 3. Verifica se o body ESTÁ com o modo noturno ativado
    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; //  o botão vira Sol
    } else {
        botao.innerText = "🌙"; // o botão vira Lua
    }
}