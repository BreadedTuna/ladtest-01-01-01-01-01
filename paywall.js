// Create dark overlay
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.zIndex = 9998; // <-- LOWER z-index for overlay

// Create popup box
const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.backgroundColor = '#fff';
popup.style.padding = '30px';
popup.style.borderRadius = '10px';
popup.style.boxShadow = '0 0 30px rgba(0,0,0,0.5)';
popup.style.textAlign = 'center';
popup.style.width = '90%';
popup.style.maxWidth = '400px';
popup.style.fontFamily = 'Arial, sans-serif';
popup.style.zIndex = 9999; // <-- HIGHER z-index for popup
popup.innerHTML = `
  <h2 style="color: #333;">🔒 IPLogger Premium</h2>
  <p style="color: #555;">To continue using this service,<br>you must upgrade your account.</p>
  <p style="color: red; font-weight: bold;" id="timer">Time remaining: 2:00</p>
  <button style="padding: 10px 20px; margin: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: not-allowed;" disabled>Upgrade Now</button>
  <button style="padding: 10px 20px; margin: 10px; background-color: #ccc; color: black; border: none; border-radius: 5px; cursor: not-allowed;" disabled>Cancel</button>
  <p style="font-size: 12px; color: #aaa; margin-top: 15px;">Contact support if you believe this is an error.</p>
`;

// Countdown timer
let time = 120;
const timerElement = popup.querySelector('#timer');
const countdown = setInterval(() => {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (time <= 0) {
        clearInterval(countdown);
        timerElement.textContent = "Session expired.";
    }
}, 1000);

// Attach to page
document.body.appendChild(overlay);
document.body.appendChild(popup);
