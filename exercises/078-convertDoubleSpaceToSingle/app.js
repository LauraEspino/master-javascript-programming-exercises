function convertDoubleSpaceToSingle(str) {
    // your code here
    
let quitar=str.replace(/  /g," ");
return quitar
}  

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(convertDoubleSpaceToSingle(output)); // --> "string with double spaces"