
let href = window.location.href;
let path = window.location.pathname;
let host = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocol: ${protocol}<br>`;
html += `Hostname: ${host}<br>`;
html += `Pathname: ${path}<br>`;
html += `URL: ${href}<br>`;

document.write(html)