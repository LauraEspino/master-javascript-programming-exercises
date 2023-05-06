let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0)
      {return 0}
    let producto=1;
    obj[key].forEach(e=>{
      producto=e*producto;
    })
    return producto
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24