// const tinderUser = new object
// single turn object
// const tinderUser = new Object()


// non single time object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "harshad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "harshad30@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harshad",
            lastname: "Varu"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 ,obj2 }
// const obj3 = Object.assign({},obj1, obj2, obj4)

// const obj3 = (...obj1, ...obj2)

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Ui/Ux design",
    price: "999",
    courseInstuctor: "Harshad"
}

// course.courseInstructor

const {courseInstuctor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


