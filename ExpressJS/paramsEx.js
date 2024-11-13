const express = require('express');
const app = express()
const data = require('./data.json');

app.get('/',(req,res)=>{
   
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

//to display every product

// app.get('/api/products',(req,res)=>{
//     const newData = data.map((detail)=>{
//         const {id,name,image_url,price} = detail;
//         return {id, name, image_url,price}
//     })
//     res.json(newData)
// })

//to display whatever product we want

app.get('/api/products/:productID', (req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params;
    const firstProduct = data.find((product) => product.id === Number(productID))
    if(!firstProduct){
        return res.status(404).send("Product not found")
    }
    res.json(firstProduct)
    //DO NOT SEND MORE THAN ONE RESPONSE FOR THE REQUEST(in conditions is fine )
    //if productID is not present in the data --- logs undefined
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params)
    res.send("Hello World")
})


//query strings

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...data]
    //res.send("hello world")
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send('no product matched your search')
        return res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})