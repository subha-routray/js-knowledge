
const name="subh"
const marks=60
//console.log(name+marks+"value") not a good way of writing
console.log(`my name is ${name} and my marks is ${marks}`)


// we can access the string in another way
const gameName =new  String("time-zone-enjoy")
console.log(gameName)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('3'))
console.log(gameName.indexOf('t'))


const newString= gameName.substring(0,4)//fourth position element is not included
console.log(newString)


const anotherString= gameName.slice(-8,2)
console.log(anotherString)

const anotherNewString= "   subh         "
console.log(anotherNewString)
console.log(anotherNewString.trim())//remove extra spaces


const url="https//subharoutray//subha%20routray"
console.log(url.replace('%20','-'))
console.log(url.includes("subha"))
console.log(url.includes("shyam"))
console.log(gameName.split('-'))//the '-' represents the separator on which basis we are separating the complete text



