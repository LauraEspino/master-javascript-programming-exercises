function filterEvenLengthWords(words) {
    // your code here
    let arr=[];
    words.forEach(e=>{
        if(e.length%2==0){
            arr.push(e)
        }
    })
    return arr
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']