// Write your function here
function keep(arr, elem){
   let newArr=[];
    arr.forEach(e=>{
        if(e==elem){
            newArr.push(e)
        }
        else{
            return[]
        }
    
    })

return newArr
}
