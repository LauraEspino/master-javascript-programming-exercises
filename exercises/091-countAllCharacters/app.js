// Write your function here

function countAllCharacters(srt){

    if(str.length==0){
        return  {}
    }
    let obj={}
    for(let i=0; i<srt.length;i++){
      if(obj[str[i]]){
        obj[str[i]] =obj[str[i]]+1
      }else{
      obj[str[i]] = 1
      }

    }
    return obj
}
