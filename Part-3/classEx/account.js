class Account{
    min_Bal=500
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(){
        console.log(" 1 CR -deposited successfully")
    }
    withdrawl(){
        console.log("Insuffient Bal")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    get_St(){
        console.log("Chargable")
    }
    close_Account(){
        console.log("Account Bal - -ve Bal ! Deposit more")
    }
}

let a1=new Account()

console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_Bal()
a1.withdrawl()
a1.get_St()

a1.close_Account()