const userEmail = ""

if(userEmail){
    console.log("Got the user Email");
}
else{
    console.log("Don't have user email");
}

/* falsy values 
false,0,-0,BigInt 0n,"",null,undefined,NaN
remaininng value is truthy valu.

string 0 is truthy value,string in false value is true, function(){}, " ",[] */
// check the array empty or not.
if (userEmail.length === 0){
    console.log("Array is empty");
}

// check the obj empty or not.
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing operator (??): null underfined check the null value safety only use null / underfined use the first valueto operate

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 100

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")