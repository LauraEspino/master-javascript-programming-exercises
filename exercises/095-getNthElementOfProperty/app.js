// Write your function here
function getNthElementOfProperty(obj, key, nth){
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0){
     return undefined
    }
    return obj[key][nth]
 }
