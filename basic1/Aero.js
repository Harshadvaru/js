const user = {
    username: "Harshad",
    price: 999,

    welcomeMessage: function(){
        // this keyword use for current contex ko reffer kare
        console.log(`${this.username} ,Welcome to website`);
        // this give current value and current contex.
        console.log(this);
    }
}


// user.welcomeMessage()
// // chage username 
// user.username = "Harsh"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Harshad"
//     // this is not use in function
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Harshad"
//     console.log(this.username);
// }
// chai()

// aero function use this keyword return {empty string}
const chai = () => {
    let username = "Harshad"
    console.log(this);
}

// chai()

// const addTwo= (num1, num2) => {
//     return num1 + num2
// } when { bracet} use then use return keyword 

// const addTwo= (num1, num2) => (num1 + num2)
// when ( brect) use for (num1 +num2) ; not use return keyword

const addTwo= (num1, num2) => (username="Harshad")
console.log(addTwo(3,4));