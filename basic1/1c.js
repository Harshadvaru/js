// if 

// const isUserloggedIn = true
// const temperature = 51

// if (temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");
// < ,>,<=,=>,==,!=,===,!==

// const score = 200
// // var is global scope than we not get any kind of error so we use the let keyword.
// if (score>100){
//     let power = "fly"
//     console.log(`User power:${power}`);
// }
// // error is generated when you go outside of the scopee
// console.log(`User power:${power}`);

const balance = 1000 
// used implicite code in this line and write in only one line.
// if (balance > 500) console.log("text");

// if (balance > 500) console.log("text"),console.log("texte2");

// if (balance > 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 750" );

// } else {
//     console.log("less than 1200" );

// }

const userLogIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLogIn && debitCard && 2==3) {
    console.log("Allow to buy Course");
}
// && and operation

// || or operration
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}