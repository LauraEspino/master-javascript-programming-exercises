// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    if(!obj[key] || obj[key].length==0 || !Array.isArray(obj[key])){
        return []
    }
    let arr=obj[key];
    let newArr=[];
    arr.forEach(i=>{
        if(i>10){
         newArr.push(i);
        }
    })
    return newArr

        }

