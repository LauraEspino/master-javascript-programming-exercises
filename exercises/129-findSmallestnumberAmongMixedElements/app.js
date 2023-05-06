function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length>0){
  let smallestNum=999999999999;
   if(arr.filter((e)=> typeof e == 'number')){
  arr.forEach(a=> {
  if(a<smallestNum)
  smallestNum=a
})
   }
 return smallestNum;
}
else return 0;
}




let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4