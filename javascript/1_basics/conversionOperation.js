let score = "90sdfg"; //string datatype
console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

// "33" => 33
// "33abc" => NaN
// "abc33" => NaN
// "abc" => NaN
// "" => 0
// " " => 0
// true => 1
// false => 0
//undefined => NaN
//null => 0

let isLoggedIn = 1; //number datatype

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); //true  

// 1 => true
// 0 => false
// any other number => true
// "" => false
// "hello" => true
// " " => true
// [] => true
// {} => true
// null => false
// undefined => false

let smallNumber = 123; //number datatype

let stringSmallNumber = String(smallNumber);
console.log(typeof stringSmallNumber); //string
console.log(stringSmallNumber); // "123"

// 123 => "123"
// true => "true"
// false => "false"
// undefined => "undefined"
// null => "null"
// [] => ""
// [1,2] => "1,2"
// {} => "[object Object]"
// {a:1} => "[object Object]"
// NaN => "NaN"

//*****************************Operations ************************************//

let value = "100";
let negvalue = -value;
console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 3);

let str1 = "hello ";
let str2 = "world";
let str3 = str1 + str2;
console.log(str3);  // "hello world"

console.log("5" + 3); // "53"
console.log(5 + "3"); // "53"
console.log("5" + 3 + 3); // "533"
console.log(5 + 3 + "3"); // "83"

console.log((5 + 3) * (2 / 5)); // 3.2

console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(true + true); // 2
console.log(+true); // 1
console.log(+false); // 0
console.log(" "); // " "
console.log(+ " "); // 0

let num1, num2, num3;

num1 = num2 = num3 = 5;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);   // 101
++gameCounter;
console.log(gameCounter);   // 102
gameCounter--;
console.log(gameCounter);   // 101

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

