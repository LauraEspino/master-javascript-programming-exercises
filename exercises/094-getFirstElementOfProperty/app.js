// Write your function here
function getFirstElementOfProperty(obj, key){
   if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0){
    return undefined
   }
   return obj[key][0]
}