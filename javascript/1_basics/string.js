const name = "fgh"
const repoCount = 50

// console.log(name + repoCount);

//string interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('asdfghj-dsfg-df')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.toUpperCase());

const string1 = gameName.substring(0, 4)
console.log(string1);

const string2 = gameName.slice(-5, 4)
console.log(string2);

const string3 = "   fghj   "
console.log(string3);
console.log(string3.trim());

const url = "https://hitesh.com/hitesh20"
console.log(url.replace('20','-'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));
