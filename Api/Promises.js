const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // do calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})  // create new instance using new keyword

// consume the promiseOne

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

})
