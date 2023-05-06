function filterOddLengthWords(words) {
    // your code here
    if(words.length==0 || !words.length%2!=0){
        return[]
    }
    let arr=[];
    words.forEach(e=>{
        if(e.length%2!=0){
            arr.push(e)
        }
    })
    return arr
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']