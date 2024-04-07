const promiseOne = new Promise(function(resolved, reject){
    // do an async task
    // do calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
})  // create new instance using new keyword

// consume the promiseOne

promiseOne.then(function(){
    console.log("Promise consumed");
})