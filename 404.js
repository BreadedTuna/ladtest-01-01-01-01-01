// Remove all styles and fonts
document.querySelectorAll('style, link[rel="stylesheet"], link[rel="preload"][as="style"], link[rel="preload"][as="font"], style, font, *[style]').forEach(e => e.remove());

// Reset document head and body
document.head.innerHTML = '';
document.body.innerHTML = `
<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx/1.18.0 (Ubuntu)</center>
</body>
</html>`;
