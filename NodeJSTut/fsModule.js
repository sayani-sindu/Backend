const fs = require('fs');

//mkdir() is assynchronous function where callback executes parallelly with the program.
fs.mkdir('./myFolder', (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Folder Created Successfully');
    }
})

const data = "Hi this is new File";

fs.writeFile('./myFolder/myFile.txt',data, err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Written to file successfully');
    }
})
//if flag: 'a' is not there -- it erases the existing data and add it to it.

fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("File read successfully!");
        console.log(data);
    }
})


fs.readdir('./myFolder', (err, files) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory read successfully!");
        console.log(files);
    }
})
fs.rename('./myFolder/myFile.txt', './myFolder/myFile2.txt', err => {
    if(err){
        console.log(err);
    }
    else {
        console.log("renamed the file successfully!");
    }
})

fs.unlink('./myFolder/myfile.txt', err =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Deleted the file successfully');
    }
})