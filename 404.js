// 1. Remove interfering elements
document.querySelectorAll('style, link[rel="stylesheet"], link[rel="preload"][as="style"], link[rel="preload"][as="font"], font, *[style], iframe, script').forEach(e => e.remove());

// 2. Kill all intervals and timeouts to stop site scripts from re-injecting
let highestTimeoutId = setTimeout(() => {}, 0);
for (let i = 0; i <= highestTimeoutId; i++) {
    clearTimeout(i);
    clearInterval(i);
}

// 3. Wipe the head and body
document.head.innerHTML = '';
document.body.innerHTML = '';

// 4. Create a full-page 404 overlay
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.background = 'white';
overlay.style.zIndex = '999999999';
overlay.style.fontFamily = 'Arial, sans-serif';
overlay.style.textAlign = 'center';
overlay.style.paddingTop = '20vh';
overlay.innerHTML = `
    <h1 style="font-size:48px; margin-bottom:20px;">404 Not Found</h1>
    <hr style="width:60%; margin:auto; margin-bottom:20px;">
    <div style="font-size:20px;">nginx/1.18.0 (Ubuntu)</div>
`;

// 5. Append the overlay
document.body.appendChild(overlay);

// 6. Make sure body and html are clean
document.documentElement.style.background = 'white';
document.body.style.background = 'white';
