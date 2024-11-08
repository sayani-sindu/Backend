const path = require('path');

messagePath = 'C:\Users\sindu\OneDrive\Documents\Web\HVA\backendTasks\PathModule\message.txt';
console.log(path.parse(messagePath));

console.log(path.sep);
console.log(path.join('C:','Users',"Sindu"));

console.log(path.resolve('path.js'));