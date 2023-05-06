function findSmallestElement(arr) {
    // your code here
if(arr.length==0){return 0}

let smallerNum=9999999;
arr.forEach(e=>{
    if(e < smallerNum){
        smallerNum=e

    }
})
return smallerNum
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1