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

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolved, reject){
    setTimeout(function(){
        resolved({username: "Chai", email:"harshadvaru40@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Harshad", password:"1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JAVASCRIPT", password:"124"})
        } else {
            reject('ERROR: JAVASCRIPT went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()