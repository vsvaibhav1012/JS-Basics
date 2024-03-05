let sal = [10000, 25000, 40000, 2000];
let revisedSal = [];
revisedSal = sal.map((val) => val + (val * 10) / 100);
console.log(revisedSal);
