const canvas = document.getElementById('evCanvas');
const ctx = canvas.getContext('2d');

function drawEV() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // randomize base color
  const hues = [200, 210, 220, 230];
  const baseHue = hues[Math.floor(Math.random() * hues.length)];
  ctx.fillStyle = `hsl(${baseHue}, 70%, 50%)`;

  // body size and position
  const bodyWidth = 250 + Math.random() * 100;
  const bodyHeight = 70;
  const bodyX = (canvas.width - bodyWidth) / 2;
  const bodyY = canvas.height / 2;
  ctx.fillRect(bodyX, bodyY, bodyWidth, bodyHeight);

  // cabin
  const cabinWidth = bodyWidth * 0.5;
  const cabinHeight = 40;
  ctx.fillRect(bodyX + bodyWidth * 0.25, bodyY - cabinHeight, cabinWidth, cabinHeight);

  // wheels
  ctx.fillStyle = '#444';
  const wheelRadius = 25 + Math.random() * 5;
  ctx.beginPath();
  ctx.arc(bodyX + wheelRadius * 2, bodyY + bodyHeight, wheelRadius, 0, Math.PI * 2);
  ctx.arc(bodyX + bodyWidth - wheelRadius * 2, bodyY + bodyHeight, wheelRadius, 0, Math.PI * 2);
  ctx.fill();
}

drawEV();

const facts = [
  'Electric vehicles produce zero tailpipe emissions.',
  'The first practical EV was built in the 1880s.',
  'Lithium-ion batteries power most modern EVs.',
  'Solid-state batteries promise faster charging.',
  'Regenerative braking helps charge the battery while driving.',
  'Fast chargers can add 200 miles of range in about 30 minutes.',
  'EV batteries can be recycled for other uses.',
  'Charging infrastructure is rapidly expanding.'
];

function displayFact() {
  const el = document.getElementById('evFact');
  const fact = facts[Math.floor(Math.random() * facts.length)];
  el.textContent = fact;
}

window.onload = displayFact;
