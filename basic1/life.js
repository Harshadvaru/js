// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// Aero function Work First code stop and second code stop
// Un named IIfe 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Harshad')

// Do life sepereate using ; and work both IIFE in the code.