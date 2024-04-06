const promiseOne = new Promise(function(resolve, reject){
    // Do an async 
    // DB calls, cryptography, network
    setTimeOut(function(){
        console.log('Async task is complete');
    }, 1000) 
})

promisesOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
})
 