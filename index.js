const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const PORT = 3000;

// Proxy request handler
app.use('/', proxy('https://replit.com', {
    proxyReqOptDecorator: (proxyReqOpts) => {
        proxyReqOpts.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
        return proxyReqOpts;
    }
}));

// Create an HTTP server with Express app
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
