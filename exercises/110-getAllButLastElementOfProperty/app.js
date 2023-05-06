let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if(!Array.isArray(obj[key]|| !obj[key])|| obj[key].length==0){
      return []}
      let arr=obj[key];
      delete obj[key].pop()
      return arr

}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]