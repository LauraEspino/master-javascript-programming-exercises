function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let sWord='dfgsdgvsdfvbsgbssgbdsfb';

    if(word1.length < sWord.length) sWord= word1;
    if(word2.length < sWord.length) sWord= word2;
    if (word3.length< sWord.length)sWord= word3;
    return sWord
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'