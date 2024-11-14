const crypto = require('crypto');

// Generate a SHA-256 hash
const hashData = (data) => {
    return crypto.createHash('sha256').update(data).digest('hex'); // Creates a SHA-256 hash
};

const data = 'SensitiveInformation';
const hashedData = hashData(data);

console.log(`Original Data: ${data}`);
console.log(`SHA-256 Hashed Data: ${hashedData}`);
