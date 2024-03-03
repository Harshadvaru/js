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

string 0 is truthy value,string in false value is true, function(){}, " ",[]