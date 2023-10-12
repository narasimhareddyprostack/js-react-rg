//indexof method - return index of element, 
//if element not available return -1 

let ids=[101,102,101,102,102,103]
let new_Ids=[]
for( let i=0;i<=ids.length-1;i++){
    if(new_Ids.indexOf(ids[i]) == -1){
            new_Ids.push(ids[i])
    }
}

console.log(new_Ids)