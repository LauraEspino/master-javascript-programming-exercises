// Write your function here
function select(arr, obj){
    let obj2={}
    arr.forEach((key)=>{
        if(obj[key]){
            obj2[key]=obj[key]
       
        }
    })
    return obj2
}
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log(select(arr,obj))
