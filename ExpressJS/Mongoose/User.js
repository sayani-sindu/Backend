// User.js
const mongoose = require('mongoose');

//Define address schema
const addressSchema = new mongoose.Schema({
        street: String,
        city: String
})


// Define the User schema with validation, virtuals, and methods
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // Set a minimum and maximum length for the name
        minLength: 2,
        maxLength: 35
    },
    age: {
        type: Number,
        // Custom validator to ensure age is an even number
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true// Automatically convert email to lowercase
        
    },
    createdAt: {
        type: Date,
        immutable: true, // Created date cannot be changed
        default: () => Date.now() // Sets default creation date
    },
    updatedAt: {
        type: Date
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User' 
    },
    hobbies: [String], 
    address: addressSchema
}, ); // Explicitly set collection name-- or specifications - {collection: 'User'}

// Custom instance method to say hi
userSchema.methods.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`);
}

// Static method to find by name, case insensitive
userSchema.statics.findByName = function(name) {
    return this.where({ name: new RegExp(name, 'i') });
}

// Query middleware to filter by name
userSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') });
}

// Virtual property for "namedEmail", not stored in database
userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`;
});

// Pre-save middleware to set/update the updatedAt field before saving
userSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});

// Post-save middleware to print a message after saving
userSchema.post("save", function(doc, next) {
    doc.sayHi(); // Call sayHi method after saving
    next();
});

// Export the User model
module.exports = mongoose.model("User", userSchema);
