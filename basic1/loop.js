// for loop
//                  check the length      increase length

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        //console.log("5 is the best number");
    }
    //console.log(element);
    
}
// not declare not accesseble 
// console.log(element);

// create table of 0 to 10 
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }   
}

// let myArray = ["flash","batman","superman"]
 // console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
    
//}

//  break and continue

for (let index = 1; index <=20; index++) {
    if(index == 5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <=20; index++) {
    if(index == 5){
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`value of i is ${index}`);
}



// while loop 
// let index =0 ;
//  while (index <= 10) {
//         console.log(`Value of index is ${index}`);
//         index = index + 2
// }


// let myArray = ['Viru','Hitesh','Shyam']

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }


// do while loop
// define the score
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while(score <= 10);
