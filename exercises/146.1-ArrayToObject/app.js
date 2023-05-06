function transformFirstAndLast(array) {
  
  let obj= {[array[0]]: array[array.length-1]}
  return obj
  // your code here
}
let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output);