// Write your function here
function areValidCredentials(name, password){
    let nameString= name.length;
    let passwordString= password.length;
    if(nameString>3 && passwordString>=8){
        return true;}
        else return false
    

}