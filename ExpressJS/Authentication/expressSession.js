const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

// Show session ID
app.get('/session-info', (req, res) => {
    res.send(`Your session ID is: ${req.sessionID}`);
});

// Reset session (destroy and create new one)
app.get('/reset-session', (req, res) => {
    req.session.regenerate((err) => {
        if (err) {
            return res.status(500).send("Failed to regenerate session");
        }
        res.send("Session has been reset with a new ID");
    });
});

// Reload session data
app.get('/reload-session', (req, res) => {
    req.session.reload((err) => {
        if (err) {
            return res.status(500).send("Failed to reload session");
        }
        res.send("Session data reloaded");
    });
});

// Force save session data
app.get('/force-save-session', (req, res) => {
    req.session.someData = 'This data is saved immediately';
    req.session.save((err) => {
        if (err) {
            return res.status(500).send("Failed to save session");
        }
        res.send("Session saved immediately");
    });
});

// Extend session expiration
app.get('/extend-session', (req, res) => {
    req.session.touch();
    res.send("Session expiration time extended");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
