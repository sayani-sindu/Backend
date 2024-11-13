const express = require('express');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');

// Initialize app and middleware
const app = express();
app.use(express.json());

// Database connection
let db;
connectToDb((err) => {
    if (!err) {
        app.listen(5000, () => {
            console.log("Server is listening on port 5000");
        });
        db = getDb();
    }
});

// Routes

// Get all books with optional pagination
app.get('/books', async (req, res) => {
    const page = parseInt(req.query.p) || 0;
    const booksPerPage = 3;
    let books = [];

    try {
        const cursor = db.collection('books')
            .find()
            .sort({ author: 1 })
            .skip(page * booksPerPage)
            .limit(booksPerPage);

        await cursor.forEach(book => books.push(book));
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: 'Could not fetch the documents' });
    }
});

// Get a book by ID
app.get('/books/:id', async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        try {
            const doc = await db.collection('books').findOne({ _id: new ObjectId(req.params.id) });
            res.status(200).json(doc);
        } catch (err) {
            res.status(500).json({ error: 'Could not fetch the document' });
        }
    } else {
        res.status(500).json({ error: 'Not a valid document ID' });
    }
});

// Add a new book
app.post('/books', async (req, res) => {
    const book = req.body;

    try {
        const result = await db.collection('books').insertOne(book);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Could not create new document' });
    }
});

// Delete a book by ID
app.delete('/books/:id', async (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        try {
            const result = await db.collection('books').deleteOne({ _id: new ObjectId(req.params.id) });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: 'Could not delete the document' });
        }
    } else {
        res.status(500).json({ error: 'Not a valid document ID' });
    }
});

// Update a book by ID
app.patch('/books/:id', async (req, res) => {
    const updates = req.body;
    if (ObjectId.isValid(req.params.id)) {
        try {
            const result = await db.collection('books').updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: updates }
            );
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: 'Could not update the record' });
        }
    } else {
        res.status(500).json({ error: 'Not a valid document ID' });
    }
});
