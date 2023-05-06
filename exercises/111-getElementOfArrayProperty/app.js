let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(obj[key].length==0 || !Array.isArray(obj[key]) || !obj[key]){
        return undefined
    }
     if(obj[key][index])return obj[key][index]
    else return undefined
}
console.log(getElementOfArrayProperty(obj, 'key', 1));