const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const app = express();

const {requireAuth, checkUser} = require('./middleware/authMiddleware');

// Middleware
app.use(express.static('public'));
app.use(express.json())//form of json in req.body to access
app.use(cookieParser())
// View engine
app.set('view engine', 'ejs');

// Database connection
const dbURI = 'mongodb+srv://sindusayani:HIvIrS5Lfgjfmtq0@cluster0.4cokd.mongodb.net/node-auth';

const connectDB = async () => {
  try {
    // Await the connection
    await mongoose.connect(dbURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useCreateIndex: true 
    });
    console.log("Database connected successfully");
    
    // Start the server after a successful database connection
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

// Invoke the connectDB function to establish connection and start the server
connectDB();

// Routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));

app.use(authRoutes);