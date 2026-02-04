const accountID = 456123
let accuntEmail = "sdftyghu@gmail.com"
var accountPassword = "45682"
accountCity = "bhaipur"
let accountState

// accountID = 2 //not allowed
accuntEmail = "asdf@gmail.com"
accountPassword = "12345"
accountCity = "baipur"
console.log(accountID);

/*
prefer not to usde var
because of issue in block scope and functional scope
*/

console.table([accountID, accountPassword, accuntEmail, accountCity, accountState])
