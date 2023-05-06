function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0){
    return 0;
  }
  let total=0;  
  obj[key].forEach(e=>{
      if(e!=0){
       total+=e
     }
  })
  return total/obj[key].length
}