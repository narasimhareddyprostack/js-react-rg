class Bank{
    branch_Name="Marathahalli"

    method1(){
        console.log(this.branch_Name)
    }
    method2(){
          console.log(this.branch_Name)
    }

}

let b1=new Bank()

console.log(b1.branch_Name)

b1.method1()
b1.method2()