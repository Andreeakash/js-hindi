//# primitive data types 

// 7 types:  (call by value , copy data)
/*
 String , Number , Boolean , null , undefined, symbol , bigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const OutSideTemp= null;
let userEmail;

const id =Symbol('123');
const AnotherId = Symbol('123');

// console.log(id==AnotherId );

const BigNUmber= 22222223332n;
// console.log(BigNUmber);
const heros = ["Shaktiman", "Krish", "Jatt"];
// object creation
let MyObj={
    name: "aman",
    age:22
}
// function creation and stotre in a variable

// function (){

// }
 const myFunction=function(){
    console.log("hello world");

}
// to their dat types use the his method

// console.log(BigNUmber);
console.log( typeof myFunction);
console.log( typeof id);
console.log( typeof OutSideTemp);
console.log(typeof isLoggedIn);
console.log(typeof scoreValue);



//  reference  types or non primitive 
/*
Array, Objects, Functions
*/