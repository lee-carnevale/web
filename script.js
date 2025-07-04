const canvas = document.getElementById('evCanvas');
const ctx = canvas.getContext('2d');

function drawEV() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#1976d2';
  ctx.fillRect(50, 150, 300, 80); // body
  ctx.fillRect(100, 110, 150, 40); // cabin
  ctx.fillStyle = '#555';
  ctx.beginPath();
  ctx.arc(120, 230, 30, 0, Math.PI * 2); // wheel 1
  ctx.arc(280, 230, 30, 0, Math.PI * 2); // wheel 2
  ctx.fill();
}

drawEV();

const facts = [
  'Electric vehicles produce zero tailpipe emissions.',
  'The first practical EV was built in the 1880s.',
  'EV batteries can be recycled for other uses.',
  'Charging infrastructure is rapidly expanding.',
];

function displayFact() {
  const el = document.getElementById('evFact');
  const fact = facts[Math.floor(Math.random() * facts.length)];
  el.textContent = fact;
}

window.onload = displayFact;
