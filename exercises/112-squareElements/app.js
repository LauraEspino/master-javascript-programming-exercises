function squareElements(arr) {
  // your code here
  let newArr=[];
  arr.forEach(e=>{
    e=e**2;
    newArr.push(e)
  })
  return newArr
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]