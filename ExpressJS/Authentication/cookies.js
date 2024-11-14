const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Initialize cookie-parser with a secret for signed cookies
app.use(cookieParser('mySecretKey'));

// Set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'User123', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

// Read a cookie
app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username || 'Guest';
    res.send(`Welcome, ${username}`);
});

// Set a signed cookie
app.get('/set-signed-cookie', (req, res) => {
    res.cookie('authToken', '1234567890', { signed: true, httpOnly: true });
    res.send('Signed cookie has been set');
});

// Read a signed cookie
app.get('/get-signed-cookie', (req, res) => {
    const authToken = req.signedCookies.authToken || 'No token';
    res.send(`Your auth token is: ${authToken}`);
});

// Clear a cookie
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Username cookie has been cleared');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 