//  let a = 10 is outside of scope called galobal scope.
//  where use scope of varible access or not in the program.

let a = 100

// if is local scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
}

// scope is define {}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Harshad"
    
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    //two()

}
// one()

if (true){
    const username = "Harshad"
    if (username === "Harshad"){
        const website = "youtube"
        console.log(username + website);
    }
//     console.log(website);
 }

// console.log(username);

// interesting

function 