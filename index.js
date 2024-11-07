const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy setup
app.use('/', createProxyMiddleware({
    target: 'https://replit.com', // Target site
    changeOrigin: true,
    pathRewrite: {
        '^/': '/', // Rewrite the base path if needed
    },
    onProxyReq: (proxyReq, req, res) => {
        // Modify headers if necessary
        proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    }
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
