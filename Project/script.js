const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
// console.log(button);

button.forEach(function(button){
    console.log(button);
    // add event lisner  in this line add the event listner and perform the event 
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
    })
});