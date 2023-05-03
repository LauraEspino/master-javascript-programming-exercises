function countCharacter(str, char) {
    // your code here
let counts=0
for (let i in str){
    let letter=str[i].toLocaleLowerCase();
    if(letter!=char){
        continue
    }
    else if(letter=char){
        counts=counts+1;
    }
}    
return counts

    
}

console.log(countCharacter)