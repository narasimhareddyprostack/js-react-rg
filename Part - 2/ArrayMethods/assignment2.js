var enaemes=['rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi','rahul','sonia','priyanka','modi']

var new_Names=[]

for( let i=0;i<=enaemes.length-1;i++){
    if(new_Names.indexOf(enaemes[i]) == -1){
            new_Names.push(enaemes[i])
    }
}

console.log(new_Names)