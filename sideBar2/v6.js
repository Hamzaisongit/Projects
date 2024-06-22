const btn = document.querySelector('.btn');
const toggle = document.querySelector('.btn2');
const bar = document.querySelector('.sidebar');

window.alert('Hey there JS in action !')
console.log('hello');


btn.addEventListener('click',()=>{
bar.classList.toggle('show');
console.log(bar.classList);
});


toggle.addEventListener('click',()=>{
    bar.classList.toggle('show');
    console.log(bar.classList);
});

