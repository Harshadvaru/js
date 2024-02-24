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

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harshad"))
// console.log(loginUserMessage("Harshad"))

function calculateCarprice(num1){
    return num1
}

console.log(calculateCarprice(200, 400, 500))