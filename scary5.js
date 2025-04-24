(function() {
  // Dark overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: black;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Courier New', monospace;
    color: red;
    font-size: 2em;
    text-shadow: 0 0 10px red;
  `;
  document.body.appendChild(overlay);

  // Audio
  const audio = new Audio('https://cdn.jsdelivr.net/gh/fireship-io/226-javascript-horror-sfx@main/creepy.mp3');
  audio.loop = false;
  audio.volume = 0.8;
  setTimeout(() => audio.play().catch(() => {}), 300);

  // Scary face
  const img = document.createElement('img');
  img.src = 'https://i.imgur.com/2z8iQfZ.png'; // realistic red eye
  img.style.cssText = `
    width: 300px; height: auto;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 20px red);
  `;
  overlay.appendChild(img);

  // Typing effect
  const msg = document.createElement('div');
  overlay.appendChild(msg);
  const text = "I'm watching you...";
  let i = 0;
  function type() {
    if (i < text.length) {
      msg.textContent += text[i++];
      setTimeout(type, 150);
    }
  }
  setTimeout(type, 800);

  // Screen shake
  let interval = setInterval(() => {
    overlay.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
  }, 50);

  // Redirect or close tab
  setTimeout(() => {
    clearInterval(interval);
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }, 10000);
})();
