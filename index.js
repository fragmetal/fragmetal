const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy setup
app.use('/proxy', createProxyMiddleware({
    target: 'https://replit.com', // Target server
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // Remove '/proxy' from the path
    },
    onProxyReq: (proxyReq, req, res) => {
        // Modify headers if necessary
    },
    onProxyRes: (proxyRes, req, res) => {
        // Modify response headers if necessary
    }
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
