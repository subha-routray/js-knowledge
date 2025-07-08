
//primitive
//7types:string,number,boolean,null,undefined,symbol(used for making value unique),bigiint

//javascript is 

const score=100
const scoreval=120.9
const IsLoggedIn="flase"
const  tempOut=null
let UserEmail

const Id=Symbol('908')
const anotherId=Symbol('908')
console.log(Id==anotherId)


//reference-type or non-primitive
//include arrays,objects,functions
const array=["subh","buddy"]
const MyObj={
    name:"subh",
    age:17
}
const MyFunction=function(){
    console.log("hello world")
}





//************************************************************************************************* */
//stack(primitive),heap(non-primitive)
let myYoutube="subhaYT"
let NewUserYT="myYoutube"
NewUserYT="lets_achieve_dream"
console.log(myYoutube)
console.log(NewUserYT)

let userone={
    email:"dijeij@yahoo.com",
    age:21
}
let usretwo=userone
usretwo.email="jdqwjdb@google.com"
console.log(usretwo)
console.log(userone)