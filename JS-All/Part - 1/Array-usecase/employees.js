let employees = [{id:101,name:"rahul"},
                 {id:102,name:"sonia"},
                 {id:103,name:"priyanka"},
                 {id:104,name:"modi"} 
                ]
/* 
for(let i=0;i<=employees.length-1; i++){
     console.log(employees[i].name)
}
 */
/* var i=0
while(i<=2){
    console.log(employees[i].name)
    i++
} */


for(emp of employees){
    console.log(emp.id, ":",emp.name)
}