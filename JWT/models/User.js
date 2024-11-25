const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an passeord'],
        minlength: [6, 'Minimum password length is 6 characyers']
    },
});

//fire a function after dpc saved to DB
// userSchema.post('save', function(doc, next){
//     console.log('new user was created and saved', doc);

//     next();
// })

//fire a function before saved to DB
userSchema.pre('save',async function(next){
    //console.log('saving data to DB...', this);
    const salt = await bcryptjs.genSalt()
    this.password = await bcryptjs.hash(this.password, salt)
    next();
})

//static method for login users

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if(user){
        const auth = bcryptjs.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('Incorrect email')
    
}

const User = mongoose.model('user', userSchema)//mongodb pluralise it

module.exports = User;