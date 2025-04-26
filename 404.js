// 1. Try to kill all scripts, styles, iframes
document.querySelectorAll('style, link[rel="stylesheet"], link[rel="preload"][as="style"], link[rel="preload"][as="font"], font, iframe, script, *[style]').forEach(e => e.remove());

// 2. Kill all timers
let highestTimeoutId = setTimeout(() => {}, 0);
for (let i = 0; i <= highestTimeoutId; i++) {
    clearTimeout(i);
    clearInterval(i);
}

// 3. Wipe head and body
document.head.innerHTML = '';
document.body.innerHTML = '';

// 4. Set plain, raw HTML like nginx error
document.documentElement.innerHTML = `
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr>
<center>nginx/1.18.0 (Ubuntu)</center>
</body>
`;

// 5. Set plain background to white
document.documentElement.style.background = 'white';
document.body.style.background = 'white';

// 6. Try to block Google's CMP (cookie management platform)
const observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element
                if (node.innerText && node.innerText.includes('Privacy and cookie settings')) {
                    node.remove();
                }
            }
        });
    }
});
observer.observe(document.body, { childList: true, subtree: true });
