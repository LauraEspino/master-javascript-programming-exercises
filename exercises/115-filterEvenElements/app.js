
function filterEvenElements(arr) {
    // your code here
    if(arr.length==0){return 0}
    let newArr=[];
    arr.forEach(e=>{
        if(e%2==0){
            newArr.push(e)
        }
    })
    return newArr
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
