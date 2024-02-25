//  let a = 10 is outside of scope called galobal scope.

let a = 10

// if is local scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// scope is define {}

{}

console.log(a);
console.log(b);
console.log(c);