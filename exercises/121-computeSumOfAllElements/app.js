function computeSumOfAllElements(arr) {
  // your code here
  if(arr.length==0){return 0}
  let suma=0;
  arr.forEach(e=>{
    suma+=e;
  })
  return suma
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6