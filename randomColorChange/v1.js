window.alert('hey there js in action');

const btn = document.querySelector('button');
const bdy = document.querySelector('body');

btn.addEventListener('click', ()=>{
    let clr = '#';
    for(let i=0;i<=5;i++){
        let num = Math.floor(Math.random()*9);
        clr += num.toString();
    }

    console.log('hi ' + clr)

    bdy.style.background = clr;
   
})