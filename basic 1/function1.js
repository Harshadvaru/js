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

// ... called rest & spread operatore
function calculateCarPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 500))

const user = {
    username: "Harshad",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} andd price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,300,400,1800]

function returmSecondValue(getArray){
    return getArray[3]
}

// console.log(returmSecondValue(myNewArray));
console.log(returmSecondValue([200,300,400,1800]))