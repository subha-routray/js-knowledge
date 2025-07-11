
const array=[0,1,2,3,4,6]
const heroes=["subha","papa","buddy"]
console.log(array[0])///accessing the arrray
//shallow copies
//deep copies
const arr2=new Array(1,2,3,4,7,8)//a should be capital
console.log(arr2[2])
//arr2.push(5)////inster the value in the array
//arr2.push(6)
//arr2.pop()
console.log(arr2)
//arr2.unshift(9)
//arr2.shift()
const New_ARR=arr2.join()//join operation converts the array into string
console.log(arr2)
console.log(New_ARR)

//slice and splice
console.log("A",arr2)
const mna1= arr2.slice(1,3)//dont affect original array

console.log(mna1)
console.log("B",arr2)

const mna2= arr2.splice(1,3)//changes originqal array
console.log(mna2)
console.log("C",arr2)
