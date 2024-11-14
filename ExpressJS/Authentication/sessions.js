const express = require('express')
const session = require('express-session')

const app = express()
const port = 3000

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

app.get('/', (req,res) =>{
    if(req.session.views){
        req.session.views ++;
        res.send(`<h1>Welcome back! you've visited the page ${req.session.views} times.</h1>`)
        } else {
            req.session.views = 1;
            res.send(`<h1>Welcome to this site! This is your first visit. <h1>`)
    }
})


app.get('/login', (req, res)=>{
    req.session.username = 'User123'
    res.send('You are now logged in')
})

app.get('/logout', (req,res) =>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(400).send(err)
        }
        res.clearCookie('connect.sid')
        res.send('You are now logged out')
    })
})

app.listen(port, (req, res)=>{
    console.log('Server is running');
})