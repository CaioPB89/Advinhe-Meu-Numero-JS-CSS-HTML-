"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1; // *20 para ter aleatorios entre 1 e 19(para em 19.999999, ja que é entre 0 e 1 )
// e trunc para remover as casas. +1 para podr alcançar o valor de 20
let score = 20; // state variable
let highscore = 0;

function displayMessage(message){
  // Ja que message é usada varias vezes, pode ser refatorada em uma função
  document.querySelector(".message").textContent = message;
};

// addEventListener é um metodo que recebe o evento (click) e uma função que sera executada quando o evento acontece
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Ṕega o valor do input de .guess ao se clicar e coloca em uma variavel

  // Logica do jogo
  if (!guess) {
    // se não houver guess numericos, ja que i type em HTML é number, já retorna false se não for um numero...
    displayMessage("Sem número...");
    // Sempre leve em conta a possibilidade de não haver valor

    // Se foi um acerto
  } else if (guess === secretNumber) {
    displayMessage("Parabéns, acertou!");
    document.querySelector(".claps").play(); // Toca um elemento de audio de HTML
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#e71a1a"; //Modificando CSS (.style.elemento a mudar). O valor deve ser uma string
    document.querySelector(".number").style.width = "30rem";

    // Checando a highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      // Se for uma nova highscore, concatena uma string a mais
      document.querySelector(".message").textContent += " NEW HIGHSCORE!";
    }

    // Se errou o numero
  } else if (guess !== secretNumber) {
    // Precisa checar se ainda tem jogadas
    if (score > 1) {
      // Se haver jogadas, o numero chute foi maior ou menor?
      displayMessage(guess > secretNumber ? "O chute foi alto..." : "O chute foi baixo..."); // Enviando o resultado do operador como argumento
      score--;
      document.querySelector(".score").textContent = score; // Atualiza score visivel
    } else {
      displayMessage("Você perdeu o jogo...");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Botão De novo!
document.querySelector(".again").addEventListener("click", function () {
  score = 20; // Reseta score
  document.querySelector(".score").textContent = score; // Passa score para a pagina
  secretNumber = Math.trunc(Math.random() * 20) + 1; // gera outro numero secreto
  displayMessage( "Olá novamente, tente advinhar!");
  document.querySelector(".number").textContent = "?"; // Esconde o numero
  document.querySelector(".guess").value = " "; // Reinicia o valor no input

  //Modificando CSS para o valor inicial
  document.querySelector("body").style.backgroundColor = "#222"; 
  document.querySelector(".number").style.width = "15rem";
 
});


