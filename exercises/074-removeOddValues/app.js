let objeto= {
        a:5,
        b:67,
        c:4,

}

function removeOddValues(obj) {
    // your code here
    let resultado={obj};
    for(let value in obj){
        if(obj.value%2!=0){
        delete obj[value];
        }
    }
return resultado;
}
console.log(removeOddValues(objeto))