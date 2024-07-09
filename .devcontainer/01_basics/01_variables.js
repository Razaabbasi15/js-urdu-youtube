const accountId = 144553
let accountEmail = "razaabbasi@gmail.com"
var accountPassword = "12346"
accountCity = "Karachi"
let accountState

//accountId = 2  constant not changeble or not allowed

accountEmail = "ra@ra.com"
accountPassword = "1212584"
accountCity = "london"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])