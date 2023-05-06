function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length==0){
        return 0;
    }
    let largest=0
    arr.forEach(e=>{
        if(e.length>largest){
            arr=e.length;
        }
    })
    return arr
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5