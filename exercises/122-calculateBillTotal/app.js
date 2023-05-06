function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let impuesto=preTaxAndTipAmount*0.095;
    let propina=preTaxAndTipAmount*0.15
    let total=preTaxAndTipAmount+impuesto+propina
    return total
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9