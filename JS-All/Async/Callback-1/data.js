let employees=[
    {eid:101,ename:"Rahul Gandhi", esal:45000},
    {eid:102,ename:"Sonia Gandhi", esal:55000},
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}
let getEmployees=()=>{
     setTimeout(()=>{
        let rows=""

        for(emp of employees){
            rows = rows + `<tr>
                           <td>${emp.eid}</td>
                           <td>${emp.ename}</td>
                           <td>${emp.esal}</td>
                          </tr>`
        }
        //document.getElementById('tbody_Data').innerHTML="GM"
        document.getElementById('tbody_Data').innerHTML=rows
     },2000)
}

createEmployee({eid:103,ename:"Priya", esal:65000})
getEmployees()