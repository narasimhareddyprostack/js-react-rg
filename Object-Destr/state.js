let state={
    product:{
        p_Id:'P101',
        p_Name:"Iphone 5s",
        p_price:4500,
        p_Color:['Red','Blue','Yellow']
    },
    users:[{name:"rahul",loc:'wayand'}],
    flag:true
}
let {flag:chiru, product:{p_Name}}  = state
console.log(p_Name)
console.log(chiru)