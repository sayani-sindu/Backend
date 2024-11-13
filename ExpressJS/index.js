

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Sample JSON data
    const jsonData = [
        {
            name: "sindu",
            age: 20
        },
        {
            name: "ammu",
            age: 15
        }
    ];

    const formattedJSON = JSON.stringify(jsonData, null, 2); // Pretty print with 2 spaces

    res.setHeader('Content-Type', 'application/json');

    res.setHeader('Content-Length', Buffer.byteLength(formattedJSON));

    res.send(formattedJSON);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
