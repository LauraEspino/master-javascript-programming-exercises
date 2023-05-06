function getLongestElement(arr) {
    // your code here
    if(arr.length==0){return ""}
    let longestString="";
    arr.forEach(e=>{
        if(e.length>longestString.length){
            longestString=e;
        }
    })
    return longestString
    
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'