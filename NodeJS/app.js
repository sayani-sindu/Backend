const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//instead of above four lines we can use -->  const {readFile, writeFile} = require('fs').promises; 


const start = async() =>{
    try{
        const first = await readFilePromise('first.txt','utf-8');
        const second = await readFilePromise('second.txt', 'utf-8');
        const result = first + second;
        console.log(result);
        await writeFilePromise('result.txt', result);
    }
    catch(error){
        console.log(error)
    }
    
}
start()

//UTF-8 is a flexible, space-efficient, and universal text encoding that ensures text can be stored, transmitted, and read properly across different systems and languages.