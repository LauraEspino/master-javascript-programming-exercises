let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key]|| !obj[key])|| obj[key].length==0){
      return []}
      let greatest=0;
      obj[key].forEach(e=>{
        if(e>greatest){
          greatest=e
        }
      })

      return greatest
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4