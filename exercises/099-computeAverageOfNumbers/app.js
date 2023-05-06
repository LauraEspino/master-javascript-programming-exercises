// Write your function here !
function computeAverageOfNumbers(arr){
    if (arr.length == 0) return 0;
    let newArr=0;
    for(let i=0; i<arr.length; i++){
        newArr+=arr[i];
    }
    let promedio=newArr/arr.length;
return promedio
}
