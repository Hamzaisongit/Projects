const links = document.querySelector('.normal');
const tog = document.querySelector('.btn');

window.alert('js in action')


tog.addEventListener('click',()=>{
    
    let list = links.classList;
    console.log(list);
    list.toggle('show');  
})




