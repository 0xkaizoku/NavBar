let threedots = document.querySelector('.three-dots');
let container = document.querySelector('.container');
let cut = document.querySelector('.cut');

threedots.addEventListener('click', ()=>{
    container.style.width = "100vh"
})

cut.addEventListener('click', ()=>{

container.style.width = "0vh"
})