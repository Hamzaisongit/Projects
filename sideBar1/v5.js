const toggle = document.querySelector('.toggle');
const x = document.querySelector('.x');
const bar = document.querySelector('.sidebar');

console.log('hello js');

toggle.addEventListener('click',()=>{
     console.log('hi');
     bar.classList.toggle('show');
     console.log(bar.classList);
});

x.addEventListener('click',()=>{
    bar.classList.remove('show');
    console.log(bar.classList);
});