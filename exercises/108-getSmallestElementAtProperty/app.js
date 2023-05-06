let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key]|| !obj[key])|| obj[key].length==0){
      return []}
      let smallest=99999;
      obj[key].forEach(e=>{
        if(e<smallest){
          smallest=e
        }
      })

      return smallest
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1