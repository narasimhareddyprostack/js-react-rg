var ids=[101,102,103,104]
console.log(ids.length)

//add element end of the array
var new_Size=ids.push(105)
console.log(ids)
console.log(new_Size)
//add element starting of array
ids.unshift(100)
console.log(ids)
//remove last element from array

var removed_Value=ids.pop()
console.log(ids)
console.log(removed_Value)

//remove first elment of array

ids.shift()
console.log(ids)