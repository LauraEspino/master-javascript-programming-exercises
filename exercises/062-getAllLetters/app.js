function getAllLetters(str) {
    // your code here
    let allLetter=[]

    for(let i in str){
        let letter=str[i];
     allLetter.push(letter);   
    }
    return allLetter
}
console.log(getAllLetters)