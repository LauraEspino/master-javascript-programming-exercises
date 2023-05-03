// Write your function here
/*function countAllCharacters(str){
    if(str.length == 0){
        return {}
    }
    
    obj={}

    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] = obj[str[i]] + 1 
        }else{
            obj[str[i]] = 1
        }
    }

    return obj;
}*/
function countAllCharacters(srt){
    if(str.length==0){
        return  {}
    }
    let obj={}
    let key={}
    let count=0;
        for(let i=0; i<srt.length;i++){
      if(str[i]=[str[i]]){
        obj[key].push[i];
        Object.values=count + 1

      }else{
      obj[str[i]] = 1
      }

    }
    return obj
}
console.log(countAllCharacters('banana'))