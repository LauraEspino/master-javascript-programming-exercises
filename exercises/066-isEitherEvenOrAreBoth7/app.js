let numero1=5;
let numero2=4;
let numero3=7;
let numero4=7;
let numero5=8;

function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    if((num1%2==0) || (num2%2==0)){
        return true}
    else if((num1==7)&&(num2==7)){
        return true}
    else {return false}
}
console.log(isEitherEvenOrAreBoth7(numero1, numero4))
