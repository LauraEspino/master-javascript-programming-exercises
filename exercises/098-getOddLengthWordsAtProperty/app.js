// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length==0) {
        return []
    }
    let newArr=[];
    obj[key].forEach(e=>{
        if(e.length%2!=0){
            newArr.push(e)
        }
    })
    return newArr
}
