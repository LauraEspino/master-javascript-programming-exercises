function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArr = [];
    newArr.push(element)

    arr.forEach(elemento=>{
        newArr.push(elemento);
    })
    return newArr;
}
let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]