window.alert('hey there js in action');

let count = 0;

console.log('hi');


const btns = document.querySelector('.btns').querySelectorAll('.btn');
console.log(btns);
btns.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        let event = e.currentTarget.classList;
        if(event.contains('dec')){
           count--;
        }else if(event.contains('inc')){
            count++;
        }else if(event.contains('res')){
           count = 0;
        }
        console.log('in '+ count);
        document.getElementById('count').innerHTML = `${count}`;
    })
});

console.log('out '+count);


