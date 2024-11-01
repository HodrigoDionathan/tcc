const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8];
let userOrder = [];
const lamp = document.getElementById('lampada');
const cerejinha = document.getElementById('cerejinha');
const message = document.getElementById('message');
const slots = document.querySelectorAll('.slot');
const cherryRainContainer = document.getElementById('cherryRainContainer');
const speechBubble = document.querySelector('.speech-bubble');
const clickSound = document.getElementById('clickSound');
const successSound = document.getElementById('successSound');
const errorSound = document.getElementById('errorSound');

// Nomes dos componentes
const componentNames = [
  "Bateria",
  "Transistor",
  "Capacitor",
  "Transformador +",
  "Motor Elétrico",
  "Eixo",
  "Estator",
  "Medidor",
];

// Dicas de montagem
const tips = [
  "Selecione a bateria de 70Ah 12 volts.",
  "Agora é a vez do Transistor.",
  "Escolha o Capacitor.",
  "E isso aí, falta escolher o Transformador.",
  "Quase lá. Selecione o motor elétrico.",
  "Agora é a vez do EIXO adaptado com ímãs.",
  "Selecione o Estator.",
  "E por fim, selecione o medidor de Voltagem.",
];

let currentTipIndex = 0; // Índice atual da dica

// Inicializa as caixas vazias com os nomes dos componentes
slots.forEach((slot, index) => {
  slot.textContent = componentNames[index];
});

// Mensagem inicial de apresentação do personagem
speechBubble.textContent = 'Olá, eu sou o Cerejinha! Me ajude a montar o projeto do TCC.';

// Atualizar o balão de fala com a primeira dica
speechBubble.textContent = tips[currentTipIndex];

// Evento de clique nos componentes
document.querySelectorAll('.component').forEach(component => {
  component.addEventListener('click', function() {
    clickSound.play(); // Toca som ao clicar
    if (userOrder.length < 8) {
      const slot = document.querySelector(`.slot[data-slot="${userOrder.length + 1}"]`);
      slot.innerHTML = `<img src="${this.src}" class="component">`;
      userOrder.push(Number(this.getAttribute('data-id')));

      // Muda para a próxima dica
      currentTipIndex++;
      if (currentTipIndex < tips.length) {
        speechBubble.textContent = tips[currentTipIndex]; // Atualiza o balão de fala
      } else {
        speechBubble.textContent = 'Parabéns! Você montou todos os componentes!'; // Mensagem final
      }

      checkOrder();
    }
  });
});

// Função para verificar a ordem da montagem
function checkOrder() {
  if (userOrder.length === 8) {
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
      successSound.play(); // Toca som de sucesso
      lamp.src = 'imagens/lampada-acesa.png';
      cerejinha.src = 'imagens/cerejinhafeliz.png';
      cerejinha.style.transform = 'scale(3)';
      message.textContent = 'Parabéns, você montou corretamente!';
      speechBubble.textContent = 'Parabéns! Mandou bem, projeto concluído!';

      // Reiniciar o jogo após 2 segundos
      setTimeout(resetGame, 2000); // Tempo antes de reiniciar (2 segundos)
    } else {
      errorSound.play(); // Toca som de erro
      message.textContent = 'TENTE DE NOVO MEU CHEFE!';
      cerejinha.src = 'imagens/cerejinhaduvida.png';
      cerejinha.style.transform = 'scale(2)';
      speechBubble.textContent = 'Não desista, meu chefe! Tente novamente!';
    }
  }
}

// Função para reiniciar o jogo
function resetGame() {
  userOrder = [];
  lamp.src = 'imagens/lampada-apagada.png';
  cerejinha.src = 'imagens/cerejinhaduvida.png';
  cerejinha.style.transform = 'scale(1)';
  message.textContent = '';
  slots.forEach((slot, index) => {
    slot.innerHTML = '';
    slot.textContent = componentNames[index];
  });
  
  // Resetar o índice da dica
  currentTipIndex = 0; // Resetar o índice da dica
  speechBubble.textContent = tips[currentTipIndex]; // Mostrar a primeira dica novamente

  // Reiniciar a chuva de cerejas
  clearCherryRain();
}

// Adiciona evento ao botão de reset
document.getElementById('reset').addEventListener('click', resetGame);
