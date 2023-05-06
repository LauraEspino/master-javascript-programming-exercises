
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key]|| !obj[key])|| obj[key].length==0){
      return []}
    let arr=[];
    obj[key].forEach(e=>{
      if(e%2==0){
        arr.push(e)
      }
    })
    return arr
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]