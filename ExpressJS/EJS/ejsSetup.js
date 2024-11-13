const express = require('express')
const app = express()
const hbs = require('hbs')

//EJS


// app.set('view engine', 'ejs');

// app.get('/', (req,res)=>{
//     const userData = {username: 'Sindu'};
//     res.render('index', userData);
// });

//PUG

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const userData = {
        name: 'Alice',
        age: 25,
        hobbies: ['Reading', 'Traveling', 'Cooking']
    };
    res.render('profile', userData);  // Render 'profile.pug' and pass userData
});

//Handlebars

// app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     const userData = {
//         name: 'Alice',
//         age: 25,
//         hobbies: ['Reading', 'Traveling', 'Cooking']
//     };
//     res.render('profile', userData);  
// });

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});