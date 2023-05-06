function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length==0){return 0}
    let shorterString=999999;
    arr.forEach(e=>{
        if(e.length<shorterString){
            shorterString=e.length;
        }
    })
    return shorterString
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3