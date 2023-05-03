function removeFromBackOfNew(arr) {
  // your code here
  let newArr=[];
  newArr=arr.filter((a,b)=>b!=arr.length-1);
return newArr
}
console.log(removeFromBackOfNew)