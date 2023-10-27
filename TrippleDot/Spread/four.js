let prices=[9,99,12,10000]

let total = prices.filter((price)=>{
    return price < 100
})

console.log(total)