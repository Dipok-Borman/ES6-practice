// // at first const:
// const number = 100;
// number = 150;
// console.log(number) //avabe erore dekhabe; 
//karon const er value o name kokhono change hoy na;

//array er khetray 
const number = [10,20,30];
number[2] = 50;
console.log(number);

// object er khetray:
const friends = {
    name : "sakib Khan",
    age : 50,
    height : 5,
}
console.log(friends.age);
console.log(friends.height);

//abar let neye kotha bolbo:
let amarNam = "Dipok";
console.log(amarNam);
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i; 
}
console.log(sum);