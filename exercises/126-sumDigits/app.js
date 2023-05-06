function sumDigits(num) {
    // your code here
    let suma=0;
    let text= num.toString();
    let separateNum=[...text];
    let suma1=0;
    let total=0;
    for(let i=0;i<separateNum.length;i++){
        if(i=="-"){
            suma1=0-i;
            suma=suma+suma1;
            total=suma+i;
        }
        else {total=suma+i}
    }
return total
    
}
let output = sumDigits(-316);
console.log(output); // --> 4