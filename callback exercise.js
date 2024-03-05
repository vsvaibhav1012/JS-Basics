/*Task for callback callback:
1. convert the given string to uppercase => use only callback
2.  write a function which can square the number, call this function in settimeout
*/


//answer1
function toup(s,toupper){
     console.log('string is :', s);
     result = toupper(s)
     return result
}
let s= "hello"

console.log('String to upper is: ', toup(s,s=>s.toUpperCase()))

//ans 2
  function square(a) {
    //var num = 4;
    console.log(a * a);
  }

  // Use setTimeout to delay the execution of the function by 3 seconds (3000 milliseconds)
  setTimeout(square, 3000, 4);