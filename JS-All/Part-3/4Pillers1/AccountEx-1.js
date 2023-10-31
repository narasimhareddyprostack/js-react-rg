class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name = name ;
        this.acc_Email =email
    }
}
class SA extends Account{
    min_Bal=500
    acc_Bal=0
    constructor(name,email,amount){
        super(name,email)
        this.acc_Bal=amount
    }
}
let s1=new SA("Rahul","rahul@gmail.com",5000)
console.log(s1)
class CA extends Account{
    min_Bal=20001
    acc_Bal=0
    constructor(name,email,amount){
        super(name,email)
        this.acc_Bal=amount
    }
}
let c1=new CA("Priyanka",'priya@rv.com',2500000)
console.log(c1)