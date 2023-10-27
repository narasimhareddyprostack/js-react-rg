//spread - extract and copy 
let emp = { 
    id:101,
    name:'Rahul',
    email:"rahul@pm.com"
}
let new_Emp = {
    ...emp, loc:"wayanad",sal:450000
}

console.log(emp)
console.log(new_Emp)