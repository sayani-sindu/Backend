const crypto = require('crypto');

// Sample data to sign
const data = 'Important message';
const privateKey = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
}).privateKey;

// Signing the data
const sign = (data, privateKey) => {
    const sign = crypto.createSign('SHA256');
    sign.update(data);
    sign.end();
    return sign.sign(privateKey, 'hex');
};

// Verifying the signature
const verify = (data, publicKey, signature) => {
    const verify = crypto.createVerify('SHA256');
    verify.update(data);
    verify.end();
    return verify.verify(publicKey, signature, 'hex');
};

const publicKey = crypto.createPublicKey(privateKey);
const signature = sign(data, privateKey);

console.log(`Data: ${data}`);
console.log(`Signature: ${signature}`);
console.log(`Verification: ${verify(data, publicKey, signature)}`);
