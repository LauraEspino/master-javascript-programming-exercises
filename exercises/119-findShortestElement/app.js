function findShortestElement(arr) {
    // your code here
    if(arr.length==0){return ""}
    let shortest= "eflkwnfnfwienflknflksnfiwensdfsf";
    arr.forEach(e=>{
        if(e.length<shortest.length)
        shortest=e
    })
    return shortest
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'