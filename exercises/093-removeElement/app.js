// Write your function here
function removeElement(array, element){
   
let NewArray=[];
    array.forEach(e=>{
        if(element !=e){
            NewArray.push(e)
        }
    })
    return NewArray
}