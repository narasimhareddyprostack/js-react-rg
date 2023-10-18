class Account{
    min_Bal = 500
    acc_Bal =0

    open_Account(){}
    deposit_Amount(amount){
      this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
      return this.acc_Bal - this.min_Bal
    }
    withdrawl_Amount(amount){
      //business login
      this.acc_Bal=this.acc_Bal - amount
    }
}
let a1=new Account()  //rahul
let a2=new Account()  //sonia


a1.deposit_Amount(10015)
a2.deposit_Amount(5010)
a1.deposit_Amount(50)
console.log(a1)
console.log(a2)


let r_Bal = a1.get_Bal()
let s_Bal= a2.get_Bal()
console.log(r_Bal)
console.log(s_Bal)




a1.withdrawl_Amount(30)

console.log(a1)
console.log(a2)