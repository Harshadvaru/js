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
// let score = 11
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while(score <= 10);


// for of loop arrray and object loop high end loop

// for off
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// // kish pe loop lagana 
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps value not repeat only unique value use

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATE")
// map.set('FR',"FRANCE")
// map.set('SA',"SOUTH AFRICA")
// map.set('IN',"INDIA")

// console.log(map);
// destructur the value

// for (const [key,value] of map) {
//     console.log(key, ':-',value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in
const programming = ["js","rb","py","java","cpp"]

for (const key in programming){
    // console.log(programming[key]);
}

