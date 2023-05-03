let one="true";
let two="false";


function or(expression1, expression2) {
  // your code here
  let resultado=" ";
if((expression1=="true")&& (expression2=="true")){
resultado=true;
}
else if((expression1=="true")&& (expression2=="false")){
  resultado=true;
  }
else if ((expression1=="false")&& (expression2=="true")){
    resultado=true;
    }
else if((expression1=="false")&& (expression2=="false")){
      resultado=false;
      }
return resultado    
 
}
console.log(or(one, two))