let sum=(a,b)=>{
    return a+b
}
let multi=(a,b)=>{
    return a*b
}
function calc(a,b,callback){
    return callback(a,b)
}

let r1= calc(10,20,sum)
let r2= calc(10,20,multi)
//let r3= calc(20,10,(a,b)=>{return a-b;})
let r3= calc(20,10,(a,b)=>a-b)
console.log(r1)
console.log(r2)

console.log(r3)