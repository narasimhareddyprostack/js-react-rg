let emp ={
    id:101,
    name:"Rahul",
    email:"rahul@gmail.com"
}
let details={
    email:"Rahul@pm.com",
    sal:45000,
    loc:"New Delhi"
}

let emp_Details={...emp,...details}
console.log(emp_Details)