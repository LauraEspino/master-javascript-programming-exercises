function isEvenWithoutModulo(num) {
    // your code here
    let aux = false;
if(num >= 0){
    for (let x = 0; x <= num + 1; x += 2) {
        if (x === num) aux = true;
    }
} else {
    for (let x = 0; x >= num - 1; x -= 2){
        if (x === num) aux = true;
    }
}
return aux;
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true