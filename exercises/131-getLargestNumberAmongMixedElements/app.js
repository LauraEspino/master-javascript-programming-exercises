function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length==0){return 0}
    let largestNum=0;
    if(arr.filter((e)=> typeof e == 'number')){
        arr.forEach(a=>{
            if(a>largestNum){
                largestNum=a
            }
        })
        return largestNum;    
    }
 
    else if(arr.filter((e)=> typeof e != 'number')){
        return 0}
   
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5