echo("Welcome to react js training");
function echo(input) {
  console.log(input);
}

echo("Welcome to js training");
//function expression

//echofunction("Echo using function expression");//invalid to call a function expression before it is being defined
let echofunction = function (input) {
  console.log(input);
};
echofunction("Echo using function expression");

//arrow function
let arrowfunction = (input) => console.log(input);
arrowfunction("Arrow function");
