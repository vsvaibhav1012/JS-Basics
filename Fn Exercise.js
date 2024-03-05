//Task: 
//Write 4 different function  =>
//add(a,b)=>returns the value of the addition=> using the regular funciton
//sub(a,b)=>return the sub of => use function expression
//mul(a,b)=> value of multi => use arrow function
//div(a,b)=> value of % => use arrow function


function add (a,b){
    return a+b;
}
let subt = function sub(a,b){
    return a-b;
}
let mul= (a,b)=> {return a*b;}

let div= (a,b)=> a/b;
let i=10,j=5;
console.log(add(i,j))
console.log(subt(i, j));
console.log(mul(i, j));
console.log(div(i, j));
