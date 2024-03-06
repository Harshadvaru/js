const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)



})