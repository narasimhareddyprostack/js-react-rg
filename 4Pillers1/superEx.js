class Parent{
    assets=10000
    get_assets(){
        console.log('Test Case 123')
        return this.assets
    }
}
class Child extends Parent{
    assets=10 
    get_Parent_Asset(){
        let value=super.get_assets()
        console.log(value)
        return value
    }
}
let c1=new Child()
console.log(c1)

let x=c1.get_Parent_Asset()
console.log(x)
//console.log(new Child().get_Parent_Asset())