// Write your function here
function findMinLengthOfThreeWords(str1,str2,str3){
    let palabra1= str1.length;
    let palabra2= str2.length;
    let palabra3= str3.length;
    if(palabra1<palabra2&& palabra1<palabra3){
        return palabra1;}
    else if(palabra2<palabra1&& palabra2<palabra3){
        return palabra2;
    }
    else if(palabra3<palabra1&& palabra3<palabra2){
        return palabra3;
    }
}
console.log(findMinLengthOfThreeWords('a', 'be', 'see'))