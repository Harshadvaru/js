// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Harshad",
    "Full name": "Harshad M. Varu", 
    [mySym] : "mykey1",
    age: 18,
    location: "anand",
    email:"harshadvaru30@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym])

JsUser.email = "harshadahir@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "harshad@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting());