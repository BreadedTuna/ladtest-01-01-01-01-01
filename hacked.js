(function() {
  // Inject safer glitch styles
  const style = document.createElement("style");
  style.innerText = `
    * {
      transition: all 0.2s ease-in-out !important;
      font-family: 'Comic Sans MS', cursive !important;
    }
    body {
      background: #111 !important;
      color: white !important;
      overflow-x: hidden !important;
    }
    .glitchy-text {
      animation: glitchText 0.3s infinite alternate;
    }
    @keyframes glitchText {
      from {
        text-shadow: 1px 0 red, -1px 0 blue;
        transform: translateX(-1px);
      }
      to {
        text-shadow: -1px 0 lime, 1px 0 magenta;
        transform: translateX(1px);
      }
    }
    .flicker {
      animation: flicker 0.5s infinite alternate;
    }
    @keyframes flicker {
      0% { opacity: 1; }
      100% { opacity: 0.6; }
    }
  `;
  document.head.appendChild(style);

  // Apply glitch to main headers & text
  const applyGlitch = () => {
    document.querySelectorAll("h1, h2, h3, p, span").forEach(el => {
      if (!el.classList.contains("glitchy-text")) {
        el.classList.add("glitchy-text");
      }
    });
  };

  // Flicker some random elements for spook
  const flickerSome = () => {
    document.querySelectorAll("img, div, button, a").forEach(el => {
      if (Math.random() < 0.2) {
        el.classList.add("flicker");
        setTimeout(() => el.classList.remove("flicker"), 500);
      }
    });
  };

  // Subtle hue shift via body background
  const cycleColors = () => {
    const hue = Math.floor(Math.random() * 360);
    document.body.style.backgroundColor = `hsl(${hue}, 20%, 10%)`;
  };

  setInterval(applyGlitch, 1000);
  setInterval(flickerSome, 1500);
  setInterval(cycleColors, 3000);

  // Spooky title cycling
  setInterval(() => {
    document.title = ["SYSTEM CORRUPTED", "👁️‍🗨️", "404: HUMAN NOT FOUND", "HACKED ⚠"].sort(() => Math.random() - 0.5)[0];
  }, 2000);
})();
