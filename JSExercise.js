console.log("Hello world");

//let,const and var
//let- block
//const-block
//var - global scope
var dept = "LKM";
var dept = "Project";
let tower = "A";
const location = "Mumbai";
//let tower="B" //cannot redeclare variable on the same scope
console.log(dept); //project
console.log(tower); //A
//const location ="delhi" //invalid //cannot redeclare variable on the same scope

if (true) {
  var dept = "HR";
  let tower = "B"; //can redeclare the variable in different scope
  console.log(dept); //HR
  console.log(tower); //B
  const location = "Goa";
  console.log(location); //Goa
}
console.log(dept); //HR
console.log(tower); //A
tower = "X"; //let allows you to re-assign the value
console.log(tower); //x
console.log(location); //Mumbai
//location="Pune";//cannot change the value of a cost
