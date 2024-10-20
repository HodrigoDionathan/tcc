const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8];
let userOrder = [];
const lamp = document.getElementById('lampada');
const cerejinha = document.getElementById('cerejinha');
const message = document.getElementById('message');
const slots = document.querySelectorAll('.slot');
const cherryRainContainer = document.getElementById('cherryRainContainer');

document.querySelectorAll('.component').forEach(component => {
  component.addEventListener('click', function() {
    if (userOrder.length < 8) {
      const slot = document.querySelector(`.slot[data-slot="${userOrder.length + 1}"]`);
      slot.innerHTML = `<img src="${this.src}" class="component">`;
      userOrder.push(Number(this.getAttribute('data-id')));
      checkOrder();
    }
  });
});

document.getElementById('reset').addEventListener('click', function() {
  resetGame();
});

function checkOrder() {
  if (userOrder.length === 8) {
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
      lamp.src = 'imagenss/lampada-acesa.png';
      cerejinha.src = 'imagenss/cerejinhafeliz.png';
      cerejinha.style.transform = 'scale(2)';
      message.textContent = 'Parabéns, você montou corretamente!';
      startCherryRain(); // Inicia a chuva de cerejas
    } else {
      message.textContent = 'TENTE DE NOVAMENTE MEU CHEFE!';
      cerejinha.src = 'imagenss/cerejinhaduvida.png';
      cerejinha.style.transform = 'scale(2)';
    }
  }
}

function resetGame() {
  userOrder = [];
  lamp.src = 'imagenss/lampada-apagada.png';
  cerejinha.src = 'imagenss/cerejinhaduvida.png';
  cerejinha.style.transform = 'scale(1)';
  message.textContent = '';
  slots.forEach(slot => (slot.innerHTML = ''));
  clearCherryRain(); // Limpa a chuva de cerejas
}

/* Função para iniciar a chuva de cerejas */
function startCherryRain() {
  const cherryCount = 30; // Quantas cerejas vão cair
  for (let i = 0; i < cherryCount; i++) {
    const cherry = document.createElement('img');
    cherry.src = 'imagenss/cerejaaa.png'; // Caminho da imagem de cereja
    cherry.classList.add('cherry');
    cherry.style.left = Math.random() * window.innerWidth + 'px';
    cherry.style.animationDuration = (Math.random() * 2 + 3) + 's';
    cherryRainContainer.appendChild(cherry);
  }
}

/* Função para limpar a chuva de cerejas */
function clearCherryRain() {
  cherryRainContainer.innerHTML = '';
}

const speechBubble = document.querySelector('.speech-bubble'); // Referência ao balão de fala

function checkOrder() {
  if (userOrder.length === 8) {
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
      lamp.src = 'imagenss/lampada-acesa.png';
      cerejinha.src = 'imagenss/cerejinhafeliz.png';
      cerejinha.style.transform = 'scale(2)';
      message.textContent = 'Parabéns, você montou corretamente!';
      speechBubble.textContent = 'Parabéns mandou Bem. Projeto Concluído.'; // Mensagem de sucesso
      startCherryRain(); // Inicia a chuva de cerejas
    } else {
      message.textContent = 'TENTE DE NOVO MEU CHEFE!';
      cerejinha.src = 'imagenss/cerejinhaduvida.png';
      cerejinha.style.transform = 'scale(2)';
      speechbubble.textContent = 'Não Desista Meu Chefe, Tente Novamente Meu Chefe!'; // Mensagem de erro
    }
  }
}

function resetGame() {
  userOrder = [];
  lamp.src = 'imagenss/lampada-apagada.png';
  cerejinha.src = 'imagenss/cerejinhaduvida.png';
  cerejinha.style.transform = 'scale(1)';
  message.textContent = '';
  speechbubble.textContent = 'Não Desista Meu Chefe! Tente Novamente'; // Reset da mensagem
  slots.forEach(slot => (slot.innerHTML = ''));
  clearCherryRain(); // Limpa a chuva de cerejas
}
const componentNames = [
  "Bateria",
  "Transformador +",
  "Capacitor",
  "Motor Elétrico",
  "Eixo",
  "Estator",
  "Transformador -",
  "Transistor"
];

function resetGame() {
  userOrder = [];
  lamp.src = 'imagenss/lampada-apagada.png';
  cerejinha.src = 'imagenss/cerejinhaduvida.png';
  cerejinha.style.transform = 'scale(1)';
  message.textContent = '';
  speechbubble.textContent = 'Olá, eu sou o Cerejinha, me ajude a montar o Projeto do TCC!'; // Reset da mensagem
  slots.forEach((slot, index) => {
    slot.innerHTML = `<span class="component-name">${componentNames[index]}</span>`; // Reinserir nomes nas caixas
  });
  clearCherryRain(); // Limpa a chuva de cerejas
}
