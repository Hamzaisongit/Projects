const str = document.getElementById("text-input");

let strVal;

document.getElementById("check-btn").addEventListener('click',()=>{
  if(str.value){
    console.log('hi')
    strVal = (str.value)
    console.log(strVal)
    palindrome(strVal);
    str.value='';
  }else{
  alert('Please input a value')
  }   
})

function palindrome(s){
  let str = s.toLowerCase().replace(/[\W_]/g ,'');
  if(str.length==1){
  document.getElementById('result').innerHTML = `${s} is a palindrome`
  return;
}else if(str.length == 2){
  str[0]==str[1] ? document.getElementById('result').innerHTML = `${s} is a palindrome` : document.getElementById('result').innerHTML = `${s} is not a palindrome`;
  return;
}else if(str.length%2==0){
  let flag=0;
  for(let i=0;i<str.length/2;i++){
    if(str[i]==str[str.length-1-i]){
      continue;
    }else{
      flag=1;
    }
  }
  flag ? document.getElementById('result').innerHTML = `${s} is not a palindrome` : document.getElementById('result').innerHTML = `${s} is a palindrome`;
}else{
  let flag=0;
  for(let i=0;i<s.length/2;i++){
    if(str[i]==str[str.length-1-i]){
      continue;
    }else{
      flag=1;
    }
  }
  flag ? document.getElementById('result').innerHTML = `${s} is not a palindrome` : document.getElementById('result').innerHTML = `${s} is a palindrome`;
}
}




