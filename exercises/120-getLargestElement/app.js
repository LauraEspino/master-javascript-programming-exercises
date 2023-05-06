function getLargestElement(arr) {
  // your code here
  if(arr.length==0){return 0}
  let greatestNum=0;
  arr.forEach(e=>{
    if(e>greatestNum){
      greatestNum=e
    }
  })
  return greatestNum
  
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;