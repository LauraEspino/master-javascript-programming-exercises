function filterOddElements(arr) {
  // your code here
  let newArr=[];
  arr.forEach(e=>{
    if(e%2!=0){
      newArr.push(e)
    }
  }
  )
  return newArr
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]