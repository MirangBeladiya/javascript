// stack memory(primitive datatypes) ==> get copy of variable
// heap memory(non-primitive datatypes) ==> get reference of original value

let name = "rajadotcom"
let otherName = name
otherName = "asdfghj"

console.log(name);
console.log(otherName);

let user = {
    email: "fghj@gmail.com",
    upi: "user@bob"
}

let user2 = user

user2.email = "sdf@gmail.com"

console.log(user.email);
console.log(user2.email);
