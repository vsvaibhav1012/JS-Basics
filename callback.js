let divide = (a, b) => a / b;
//console.log(divide(6, 3));

function MathOp(num1, num2, x) {
  //HOF - Higher Order function
  console.log(num1); //2
  console.log(num2); //3
  result = x(num1, num2); //divide(2,3) //multiply(2,3)
  return result;
}

console.log(MathOp(2, 3, divide)); //divide is the callback function
//console.log(MathOp(2,3,sqrt))
console.log(MathOp(2, 3, (a, b) => a * b));
console.log(
  MathOp(8, 9, function (a, b) {
    return a * a + b * b;
  })
);
