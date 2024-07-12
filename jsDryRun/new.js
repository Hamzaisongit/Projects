const obj = {
    k1: 'one'
}

let arr = [1,2,3,4,5]

const arr2 = arr.map((e)=>{
    if(e%2==0){

        return e*2;
    }else{
        return e
    }
})

Object.freeze(obj)

obj.k2 = 'two';

console.log(obj.k2);

console.log(arr2)

