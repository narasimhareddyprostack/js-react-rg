let employees=[{eid:101,ename:"Rahul", esal:45000},
{eid:102,ename:"Sonia", esal:65000},
{eid:103,ename:"Priyanka", esal:75000},
{eid:104,ename:"Modi", esal:85000},
]
let display_Data = ()=>{
    let rows=""
    for(employee of employees){
        rows = rows + `<tr> 
                            <td>${employee.eid}</td>
                            <td>${employee.ename}</td>
                            <td>${employee.esal}</td>
                         </tr>`
    }
    
    //document.getElementById('tbody_data').innerHTML="GM"
    document.getElementById('tbody_data').innerHTML=rows
}