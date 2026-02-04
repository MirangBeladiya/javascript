'use strict'; //treat all ja code as newer version of javascript

//alert("hello"); //we are using nodejs not browser

console.log(3 + 3); //addition
console.log("hello" + " world"); //string concatenation

let name = "john"; //string datatype
let age = 25; //number datatype
let isStudent = true; //boolean datatype
let address; //undefined datatype
let phone = null; //null datatype

//number datatype => 2 to the power of 53
let bigNumber = 9007199254741991n; //bigint datatype
let symbol = Symbol("id"); //symbol datatype
//string, number, boolean, undefined, null, bigint, 
// symbol => unique and immutable

//object datatype => collection of key-value pairs

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isStudent); //boolean    
console.log(typeof address); //undefined
console.log(typeof phone); //object
console.log(typeof bigNumber); //bigint
console.log(typeof symbol); //symbol
console.log(typeof null); //object
