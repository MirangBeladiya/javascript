// console.log( 2 > 3);
// console.log( 2 >= 3);
// console.log( 2 < 3);
// console.log( 2 == 3);
// console.log( 2 != 3);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null >= 0); //true 
console.log(null == 0); //false

//the reason is that an equity check == and comparisions > < >= <= work differently.
//comparisions convert null to a number,treating it as 0
//that's why null>=0 is true and null>0 is false

console.log(undefined ==0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //false

// === strictly check number and its datatype also
console.log("2" == 2); //true
console.log("2" === 2); //false

