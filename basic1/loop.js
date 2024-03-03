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
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
    
}