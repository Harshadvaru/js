const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE")
map.set('FR',"FRANCE")
map.set('SA',"SOUTH AFRICA")
map.set('IN',"INDIA")

for (const key in map) {
     console.log(key);
}

// object for in loop or array ke upar for off loop 

// const Coding =  ["js","ruby","java","python","cpp"]

// callback function
// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( () => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
// array ke andar object check kar
myCoding.forEach((item) => {
//     console.log(item.languageName);
 })

//  const coding = ["js","ruby","java","python","cpp"]

//  const values = coding.forEach ((item) => {
//     // console.log(item);
//     return item
//  })

//  console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter ke andar call back function milega

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// declare array
const newNums = []
// use forEach loop
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
// print the newNums
console.log(newNums);