function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length==0)
    {return 0}
  let producto=1;
  let newArr=[]
  arr.forEach(e=>{
    producto= producto*e;
    newArr.push(producto)
  })
  return newArr.pop()
}


let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

