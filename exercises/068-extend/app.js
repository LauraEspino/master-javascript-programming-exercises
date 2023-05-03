
/*let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
let objeto1={...obj1,...obj2}
return objeto1

}
console.log(extend(obj1,obj2))*/
function extend(a, b) {
	Object.keys(b).forEach((key)=>{
	    if(!a[key]) {
	        a[key] = b[key];
	    }
	});
}

var obj1 = {a:1, b:2};
var obj2 = {b: 4, c:3};

extend(obj1, obj2);

console.log(obj1);
console.log(obj2);
