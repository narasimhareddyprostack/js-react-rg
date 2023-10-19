class Parent{
    parnet_Name;
    constructor(pnmae){
        this.parnet_Name=pnmae
    }
}
class Child extends Parent{
    child_Nmae;
    constructor(cname,pname){
        super(pname)
        this.child_Nmae=cname
        
    }
}

let c1=new Child('Rahul',"Rajiv Gandhi")
let c2=new Child('priyanka',"Rajiv Gandhi")
let c3=new Child('ramcharan',"Chiranjeevi")
console.log(c1)
console.log(c2)
console.log(c3)