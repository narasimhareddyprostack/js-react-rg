const bcrypt = require('bcrypt')
//import bcrypt from 'bcrypt'
let user={
    name:"Rahul",
    email:"rahul@pm.com",
    cc:"444455556666677778888",
    password:"LuckFellow"
}
console.log(user)
let salt = bcrypt.genSaltSync(10)
let new_CC=bcrypt.hashSync(user.cc,salt)
let new_password=bcrypt.hashSync(user.password,salt)
/* console.log(user.cc)
console.log(new_CC)
 */
let new_User={...user, cc:new_CC, password:new_password}

console.log(new_User)