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
// 1
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter ke andar call back function milega

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// or both can be use

// 2
// declare array
// const newNums = []
// // use forEach loop
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// // print the newNums
// console.log(newNums);

const books = [
    // there are multiple object
    {title: 'Book One', genre: 'Fiction', publish:1981,edition:2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish:1982,edition:2005},
    {title: 'Book Three', genre: 'History', publish:1983,edition:2006},
    {title: 'Book Four', genre: 'Fiction', publish:1984,edition:2007},
    {title: 'Book Five', genre: 'Non-Fiction', publish:1985,edition:2008},
    {title: 'Book Six', genre: 'History', publish:1986,edition:2009},
    {title: 'Book Seven', genre: 'Fiction', publish:1987,edition:2010},
    {title: 'Book Eight', genre: 'Non-Fiction', publish:1988,edition:2011}
];

// books.forEach((bk) => {
//     if (publish <= 2000) {
//         books.push(bk)
//     }
// })

// let userBooks = books.filter( (bk) => bk.genre === 'History')
// // there overwrite the function in this variable
//  userBooks = books.filter( (bk) => { 
//     return bk.publish <= 2000 &&
//      bk.genre === 'History'
// })

// console.log(userBooks);


// const myNumbers  = [1,2,3,4,5,6,7,8,9,10] 
// // add 10 value when we open scope than use return  
// // const newNums = myNumbers.map( (num) => {return num + 10})

// // use chaining method multiple method use
// const newNum = myNumbers.map((num)=> num * 10)
//                         .map((num) => num + 1)
//                         .filter((num) => num >= 40)
// console.log(newNum);

 const myNums =  [1,2,3]

//  const myTotal = myNums.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and currval: ${curval}`);
//     return acc + curval
//  }, 0)

// when we not open scope than not use the return
const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

 console.log(myTotal);