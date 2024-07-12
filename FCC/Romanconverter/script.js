const output = document.getElementById('output');
const btn = document.getElementById('convert-btn');
const input = document.getElementById('number');

btn.addEventListener('click',()=>{
  console.log('hi')
  if(input.value==''){
    output.innerHTML = "Please enter a valid number"; 
  }else if(input.value==-1){
    output.innerHTML = "Please enter a number greater than or equal to 1";
  }else if(input.value>=4000){
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }else if(input.value < 0){
    output.innerHTML = "Please enter a number greater than or equal to 1"; 
  }else if(!isNaN(input.value)){
    output.innerHTML = `${romanFor(input.value)}`;
  }else{
    output.innerHTML = "Please enter a valid number"; 
  }
})

const anchorCharTen = ['I','V','X'];
const anchorValTen = [1,5,10];
const offSetTen = [0,-1,3];

const anchorCharHun = ['X','L','C'];
const anchorValHun = [10,50,100];
const offSetHun = [0,-10,30];

const anchorCharTha = ['C','D','M'];
const anchorValTha = [100,500,1000];
const offSetTha = [0,-100,300];

const anchorCharTth = ['M','_V','_X'];
const anchorValTth = [1000,5000,10000];
const offSetTth = [0,-1000,3000];

const anchorCharHth = ['_X','_L','_C'];
const anchorValHth = [10000,50000,100000];
const offSetHth = [0,-10000,30000];

const anchorCharM = ['_C','_D','_M'];
const anchorValM = [100000,500000,1000000];
const offSetM = [0,-100000,300000];

function romanFor(val){
    let ten = val%10;
    let hun = val%100;
    let tha = val%1000;
    let tth = val%10000;
    let hth = val%100000;
    let M = val%1000000;
    
    const e = generateFor(anchorCharTen,anchorValTen,offSetTen,ten,1);
    console.log(ten)
    if(ten == val){
      return e;
    }
    const d = generateFor(anchorCharHun,anchorValHun,offSetHun,hun-ten,10);
    if(hun == val){
      return d+e;
    }
    const c = generateFor(anchorCharTha,anchorValTha,offSetTha,tha-hun,100);
    if(tha == val){
      return c+d+e;
    } 
    const b = generateFor(anchorCharTth,anchorValTth,offSetTth,tth-tha,1000);
    if(tth == val){
      return b+c+d+e;
    } 
    const a = generateFor(anchorCharHth,anchorValHth,offSetHth,hth-tth,10000);
    if(hth == val){
      return a+b+c+d+e;
    } 
    const z = generateFor(anchorCharM,anchorValM,offSetM,M-hth,100000);
    return z+a+b+c+d+e;
}

function generateFor(anchorChar, anchorVal, offSet,x,diffMod){

  if(x==0){
    return '';
  }

let diff= anchorVal.map((e)=>{
    return x-e;
 });
 
 let ind;
 let char;

 console.log(diff)
 
 
 for (let j = 0; j < diff.length; j++) {

     if(diff[j]==offSet[0]){
       ind=j;
       char = anchorChar[j];
       break;
     }else if(diff[j]==offSet[1]){
       ind=j;
       char = anchorChar[0] + anchorChar[j];
       break;
     }else if(j!=0 && diff[j]<=offSet[2] && diff[j]>offSet[0]){
     
       ind=j;
       char = anchorChar[j];
       console.log()
       for(let i=0;i<diff[j]/diffMod;i++){
         char += anchorChar[0];
       }
       break;
     }else if(j==0 && diff[j]<=offSet[2]-diffMod && diff[j]>offSet[0]){
        ind=j;
        char = anchorChar[j];
        for(let i=0;i<diff[j]/diffMod;i++){
         console.log('in')
          char += anchorChar[0];
     }
     break;
 }
 }
 return char;

}

//console.log(generateFor(anchorCharHun,anchorValHun,offSetHun,20));

console.log(romanFor(22));




// console.log(charTen);
// console.log(ind);

// console.log(diff)