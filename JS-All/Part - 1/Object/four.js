let emp={
    id:101,
    name:'rahul',
    details:function(){ return "rahul@gmail.com"}
}
console.log(emp.id)   //101
console.log(emp.name) //rahul
console.log(emp.details) //function ref

console.log("*********")

console.log(emp.id)   //101
console.log(emp.name) //rahul
console.log(emp.details()) //function ref