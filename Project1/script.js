const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
// console.log(button);

button.forEach(function(button){
    console.log(button);
    // add event lisner  in this line add the event listner and perform the event 
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
        }
    });
});