// script.js
const mongoose = require('mongoose');
const User = require('./User');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testDB", { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Connection error:", err);
    }
};

connectDB()

const run = async () => {
    try {
        // Create a new user
        const user = await User.create({ name: "Bujji", age: 40, email: "bujji@example.com" });

        // Update the user's name and save
        user.name = "Sudha";
        await user.save();

        console.log("User after update:", user);
        user.sayHi(); // Call custom instance method

        // Use static method to find by name
        const usersByName = await User.findByName("Sudha");
        console.log("Users found by name:", usersByName);

        // Query with custom query method and print result
        const usersWithQuery = await User.find().byName("Sudha");
        console.log("Users with query.byName:", usersWithQuery);

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
}

// Run the main function
run();
