const path = require('path');

const myPath ='C:\Users\sindu\OneDrive\Documents\Web\HVA\NodeJSTut\app.js';
const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath)
}

console.log(pathInfo);

console.log(path.sep);

console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'));

console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'));