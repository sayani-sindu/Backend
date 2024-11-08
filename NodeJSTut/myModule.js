const myFunction1 = ()=>{
    console.log("hello from function 1");

}

const myFunction2 = () =>{
    console.log('hello from function 2');
}

module.exports = {
    foo: 'bar',
    myFunction1: myFunction1,
    myFunction2: myFunction2
}