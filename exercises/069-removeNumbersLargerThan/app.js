let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}


function removeNumbersLargerThan(num, obj) {
    // your code here
    Object.values(obj).forEach((values)=>{
	    if(obj[value]>num) {
	    obj=delete {obj.value}
	    }
	});
}
    /*
    
    for(let i in obj){
       if(i>num){
        delete obj.i;
        }
        else return obj
    }
}
console.log(removeNumbersLargerThan(3,obj))