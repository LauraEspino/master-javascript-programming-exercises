let array=[1, 2, 3];
function removeFromBack(arr) {
    // your code here

    delete arr.pop()
    return arr
    
}
console.log(removeFromBack(array))