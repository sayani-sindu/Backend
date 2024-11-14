const crypto = require('crypto');

// Symmetric encryption setup
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Key should be 32 bytes for aes-256-cbc
const iv = crypto.randomBytes(16);  // IV should be 16 bytes

// Encrypting data
const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

// Decrypting data
const decrypt = (encryptedText) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

const text = 'Sensitive Data';
const encryptedText = encrypt(text);
const decryptedText = decrypt(encryptedText);

console.log(`Original Text: ${text}`);
console.log(`Encrypted Text: ${encryptedText}`);
console.log(`Decrypted Text: ${decryptedText}`);
