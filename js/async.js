/*setTimeout(() => {
    console.log("SetTimeout Function");
}, 0);
//callback function and timer
console.log("Hello world!");
//callback hell
//nested callback functions
setTimeout(() => {
   console.log("setTimeout Function 1");
   setTimeout(()=> {
   console.log("setTimeout Function 2")
   //return
   setTimeout(() =>{
    console.log("setTimeout Function 3")
    setTimeout(() =>{
        console.log("setTimeout Function 4");
    setTimeout(() =>{
        console.log("setTimeout Function 5");
    }, 2000);
    }, 2000);
    }, 2000);
   }, 2000);
}, 2000);*/

//promise
//state
//1.pending
//2.fulfilled
//3.rejected
//promice pass two parametwers
const myPromise=new Promise((resolve, reject) =>{
    //async operation
    let a=10;
    let b=20;
    if(a===b){
        resolve("Promise resolved: a is equal to b");
    }else{
        reject("Promise rejected: a is not equal to b");
    }
});
//consume the promise
myPromise.then((meaage ) =>{
    console.log("then:", meaage);
}).catch((error) =>{
    console.log("catch:", error);
});