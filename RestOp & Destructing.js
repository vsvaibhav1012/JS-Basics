//spread operator, rest params
//...
let sudha = ["kurti", "long skirt", "hair accessories"];
let bro = ["jean", "kurta", 1, 2];
let finallist = [...sudha, ...bro];
console.log("Sudha", sudha);
console.log("------------------");
console.log("Bro", bro);
console.log("------------------");
console.log(finallist);

function displayName(name, ...otherName) {
  //0 or more parameter
  if (otherName == undefined) console.log(name);
  else console.log(name + " ", otherName.join(" "));
}
displayName("Sudha");
displayName("Sudha", "valli");
displayName("Sudha", "valli", "Parthasarathy");
displayName("Sudha", "valli", "Parthasarathy", "xxx");
const userinfo = {
  userid: 9,
  username: "Sudha",
  age: 25,
  location: "Chennai",
};
const user2 = { ...userinfo, userid: 10 };
console.log("user 1", userinfo);
console.log("user 2", user2);

//Destructuring:
//dividing the array to individual value
//can be done for array as well as objects
 
const [dress1,,dress2] = sudha
console.log(dress1,"+",dress2)
 
function getUserData({userid,username,age}){
    console.log(userid,username,age)
}
getUserData(userinfo)

