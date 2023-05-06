function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length==0 || !typeof arr==''){ return ""}
    let shorterString="lasjdlksadladngldkfngladf";
    arr.forEach(e=> {
        if(e.length<shorterString.length){
            shorterString=e
        }
    })
    return shorterString

}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'