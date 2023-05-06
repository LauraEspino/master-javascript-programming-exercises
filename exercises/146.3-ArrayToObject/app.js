function transformEmployeeData(array) {
  // your code here
  let obj={};
for(let i of array){
  obj={[array[i]]:i[1]}

}
return obj
}
