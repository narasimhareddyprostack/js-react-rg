let employees=[{eid:101,ename:"Rahul", esal:45000},
{eid:102,ename:"Sonia", esal:65000},
{eid:103,ename:"Priyanka", esal:75000},
{eid:104,ename:"Modi", esal:85000},
]
//dispay employees - data in webdoc/html doc
//iterate employees array object and update table body
let display_Data = ()=>{
    //alert("Hello,GM")

    //update table - tbody tag
    //how to update tbody -tag : using DOM
    document.getElementById('tbody_data').innerHTML="GM"
}