let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
  if(!Array.isArray(obj[key]|| !obj[key])|| obj[key].length==0){
    return []
  }
  let arr=[];
  obj[key].forEach(e=>{
    if(e%2!=0){
      arr.push(e)
    }
  })
  return arr
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]