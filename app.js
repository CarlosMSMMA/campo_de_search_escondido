const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    if(container.classList.contains('active')){
        container.classList.remove('active')
    } else{
        container.classList.add('active')
    }
})