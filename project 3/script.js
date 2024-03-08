 const clock = document.getElementById('clock')

// or 
// const clock document.querySelector('#clock')




// thet method use for take time after run many time
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)