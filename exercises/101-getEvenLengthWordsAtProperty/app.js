let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0){
    return []}
  let arr=[];
  obj[key].forEach(e=>{
    if(e.length%2==0){
      arr.push(e)
    }
  })
  return arr;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']