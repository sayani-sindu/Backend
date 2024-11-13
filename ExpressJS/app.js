//const app = require('express')()

const express = require('express')
const app = express()

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})

//Express - Basics

// app.get('/', (req,res)=>{
//     console.log("user hit the resource")
//     res.status(200).send("Home Page")
// }) //-- /=>root


// app.get('/about', (req,res)=>{
//     res.status(200).send("About Page")
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Resource not found</h1>')
// })

// app.get()
// app.post()
// app.put()
// app.delete()
// app.all() -- works with all http methods
// app.use() -- middleware
// app.listen() --  

//Express- HTTP APP Example


const path = require('path')

//setup static and middleware

app.use(express.static('./public'))

// app.get('/',(req, res)=>{
//     res.sendFile(path.resolve(__dirname, './Style_Product_Card_CSS/product-card.html'))
// adding to static assets
// SSR(server side rendering)
// })

app.all('*', (req,res)=>{
    res.status(400).send('Resource not Found');
})