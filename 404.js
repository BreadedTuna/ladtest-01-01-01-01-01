// 1. Kill ads early by overriding functions
Object.defineProperty(window, 'fetch', { value: () => new Promise(() => {}), writable: false });
Object.defineProperty(window, 'XMLHttpRequest', { value: function() { return {}; }, writable: false });
document.createElement = new Proxy(document.createElement, {
    apply(target, thisArg, args) {
        if (args[0] === 'script' || args[0] === 'iframe') {
            return document.createElement('div');
        }
        return Reflect.apply(target, thisArg, args);
    }
});
document.body.appendChild = new Proxy(document.body.appendChild, {
    apply(target, thisArg, args) {
        if (args[0] && (args[0].tagName === 'SCRIPT' || args[0].tagName === 'IFRAME')) {
            return args[0];
        }
        return Reflect.apply(target, thisArg, args);
    }
});

// 2. Block external ads/scripts loading
const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.tagName === 'SCRIPT' && node.src) {
                node.remove();
            }
            if (node.tagName === 'IFRAME') {
                node.remove();
            }
        }
    }
});
observer.observe(document.documentElement, { childList: true, subtree: true });

// 3. Block bad network requests
(function() {
    const originalFetch = window.fetch;
    window.fetch = function(resource, init) {
        if (typeof resource === 'string' && (resource.includes('ad') || resource.includes('cookie') || resource.includes('privacy') || resource.includes('google'))) {
            return new Promise(() => {});
        }
        return originalFetch.apply(this, arguments);
    };
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url.includes('ad') || url.includes('cookie') || url.includes('privacy') || url.includes('google')) {
            return;
        }
        return originalOpen.apply(this, arguments);
    };
})();

// 4. Wipe the page
document.head.innerHTML = '';
document.body.innerHTML = '';
document.documentElement.innerHTML = `
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr>
<center>nginx/1.18.0 (Ubuntu)</center>
</body>
`;
document.documentElement.style.background = 'white';
document.body.style.background = 'white';
