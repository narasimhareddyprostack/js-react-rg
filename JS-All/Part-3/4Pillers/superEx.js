class Account{
    constructor(){
        console.log("Account class - constructor method")
    }
}
class SA extends Account{
    constructor(){
        super()
        console.log("SA - Class Constructor method")
    }
}
new SA()