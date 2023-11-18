let GM='GM'
let GN='GN'
let gmAction=()=>{
    console.log("gm Action")
    return {type:GM    }
}
let gnAction = ()=>{
    console.log("Gn Action")
    return {type:GN}
}

export {gmAction,gnAction,GM,GN}
//what is actionable object?