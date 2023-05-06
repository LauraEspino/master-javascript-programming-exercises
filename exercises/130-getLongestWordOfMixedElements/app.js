function getLongestWordOfMixedElements(arr) {
    // your code here
if(arr.length==0){
    return ""
}
let longestString="";
if(arr.filter((e)=> typeof e == 'string')){
    arr.forEach(a=>{
        if(a.length>longestString.length)
        longestString=a;
    })
}
    return longestString
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'