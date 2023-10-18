class Account{
     acc_Id;
     acc_Name; 
   
    constructor(id,name){
        this.acc_Id=id
        this.acc_Name=name
        this.min_Bal=500;
        this.acc_Bal=0;
    }
    deposit(amount){
        this.acc_Bal = this.acc_Bal +amount
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    get_Bal(){
        return this.acc_Bal -this.min_Bal
    }
}

let a1=new Account(101,'Rahul Gandhi')
let a2=new Account(102,'Sonia Gandhi')
/* console.log(a1)
console.log(a2) */

a1.deposit(7000)
a2.deposit(8000)

console.log(a1)
console.log(a2)


a1.withdrawl(15)
a2.withdrawl(500)

console.log(a1)
console.log(a2)


console.log(a1.get_Bal())
console.log(a2.get_Bal())
