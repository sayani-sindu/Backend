const express = require('express')
const bcrypt = require('bcryptjs')


const app = express()
app.use(express.json())

app.post('/register', async(req, res)=>{
    try{
        const {username, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(`${username}`);
        console.log(`${hashedPassword}`);

        res.status(201).send("User registered successfully!");
    }
    catch(error){
        res.status(500).send("error in registration")
    }
})

app.post('/login', async (req, res)=>{
    try{
        const {username, password} = req.body;
        const hashedPassword = 'storedHashedPasswordFromDatabase';

        const match = await bcrypt.compare(password, hashedPassword);

        if(match){
            res.status(200).send("Login successful");
        }
        else{
            res.status(401).send('Invalid username or password');
        }
    }
    catch(error){
        res.status(500).send('Error in login')
    }
})

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})