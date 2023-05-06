let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0){
      return[]
    }
    let arr=[];
    obj[key].forEach(e=>{
      e=e**2
      arr.push(e)
    })
    return arr
  }

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]