// function with function Name
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
}
// reference of function () execution of function

// sayMyName() 

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1+ number2
    // console.log("Harshad");
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result:" , result);

// addTwoNumbers(3,"4")

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Harshad"))