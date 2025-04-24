// hacked.js - Scary payload
(async () => {
  // Fullscreen force function
  async function requestFullscreen() {
    try {
      await document.documentElement.requestFullscreen();
    } catch (e) {}
  }

  // Keep fullscreen active
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) requestFullscreen();
  });
  requestFullscreen();

  // Create terminal overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-color: black;
    color: lime;
    font-family: monospace;
    font-size: 1.2em;
    padding: 20px;
    overflow: hidden;
    z-index: 999999;
    white-space: pre-wrap;
  `;
  document.body.appendChild(overlay);

  // Glitchy background image
  document.body.style.background = 'url("PLEASE PUT YOUR URL HERE") center center / cover no-repeat';
  document.body.style.filter = 'contrast(200%) saturate(200%)';

  // Sound
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2023/03/01/audio_f0f252eb77.mp3'); // Creepy sound
  audio.loop = true;
  audio.play();

  // Fake typing function
  const typeLine = async (line, delay = 100) => {
    for (let i = 0; i < line.length; i++) {
      overlay.textContent += line[i];
      await new Promise(res => setTimeout(res, delay));
    }
    overlay.textContent += '\n';
  };

  // Fetch IP info
  const res = await fetch('https://ipapi.co/json');
  const data = await res.json();

  // Real info (all stays local)
  const infoLines = [
    '> Accessing client data...',
    `> IP Address: ${data.ip}`,
    `> Country: ${data.country_name}`,
    `> Region: ${data.region}`,
    `> City: ${data.city}`,
    `> ISP: ${data.org}`,
    `> Browser: ${navigator.userAgent}`,
    `> Time of Access: ${new Date().toString()}`,
    `> Why do you IP log?`,
    '> Monitoring initiated...'
  ];

  // Type info
  for (const line of infoLines) {
    await typeLine(line, 75);
    await new Promise(res => setTimeout(res, 500));
  }

  // Glitchy chaos
  const glitchInterval = setInterval(() => {
    overlay.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
    overlay.style.color = ['red', 'lime', 'cyan', 'white'][Math.floor(Math.random() * 4)];
  }, 50);

  // Face fade-in fullscreen
  const face = document.createElement('div');
  face.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: url('data:image/jpeg;base64,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') center center / cover no-repeat;
    z-index: 1000000;
    opacity: 0;
    transition: opacity 3s ease-in-out;
  `;
  document.body.appendChild(face);
  setTimeout(() => face.style.opacity = '1', 2000);
})();
