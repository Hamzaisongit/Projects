const data =[
    {
        prof : 'prof 2.png',
        name : 'jolly joma',
        post : 'Manager',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora modi consequatur totam tempore! Dolores iusto magnam, beatae veniam quasi molestiae voluptatibus illum porro voluptates, quia aliquam mollitia rem facere.'
        
    },
    {
        prof : 'profile.png ',
        name : 'Bolly Boma',
        post : 'Director',
        desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsam reprehenderit nisi quibusdam minima debitis explicabo! Facere error a quasi, amet neque molestias quidem. Velit tenetur aspernatur sunt doloremque at.'
        
    },
    {
        prof : 'prof 3.png ',
        name : 'Golly Goma',
        post : 'Chairman',
        desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsam reprehenderit nisi quibusdam minima debitis explicabo! Facere error a quasi, amet neque molestias quidem. Velit tenetur aspernatur sunt doloremque at.'
        
    }
]

window.alert('hello JS');

const img = document.querySelector('img');
const dname = document.querySelector('.name');
const dpost = document.querySelector('.post');
const ddesc = document.querySelector('.desc');
const btns = document.querySelector('.nav').querySelectorAll('.btn');
const random = document.querySelector('.sign')

var i =1;

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        
        let b = e.currentTarget.classList;
        if(b.contains('l')){
          i--;
          if(i<0){
           i = (data.length - 1)
          /* img.src = data[i].prof;
           dname.innerHTML = data[i].name;
           dpost.innerHTML = data[i].post;
           ddesc.innerHTML = data[i].desc;
           console.log(i);*/

          }
           /*else{ img.src = data[i].prof;
           dname.innerHTML = data[i].name;
           dpost.innerHTML = data[i].post;
           ddesc.innerHTML = data[i].desc;
           console.log(i);} */

          
        }
        if(b.contains('r')){
            i++;
            if(i==data.length){
             i = 0;
             /*img.src = data[i].prof;
             dname.innerHTML = data[i].name;
             dpost.innerHTML = data[i].post;
             ddesc.innerHTML = data[i].desc;
             console.log(i);*/
            }
           
            /* else{ img.src = data[i].prof;
             dname.innerHTML = data[i].name;
             dpost.innerHTML = data[i].post;
             ddesc.innerHTML = data[i].desc;
             console.log(i); }*/
           
          }
          load(i);
    })
})

random.addEventListener('click',()=>{
    let no = Math.floor(Math.random()*3)
    console.log(no);
    load(no);
})

function load(j){
    img.src = data[j].prof;
    dname.innerHTML = data[j].name;
    dpost.innerHTML = data[j].post;
    ddesc.innerHTML = data[j].desc;
    console.log(i);
}



