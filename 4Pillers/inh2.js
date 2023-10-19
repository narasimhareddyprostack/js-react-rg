class Parent{
    m1(){
        console.log("Parent Class m1 method")
    }
    m2(){
        console.log("Parent Class m2 method")
    }
}
class Child extends Parent{
    m3(){
        console.log("Child Class m3 method")
    }
}
let c1=new Child()
c1.m1()
c1.m2()
c1.m3()