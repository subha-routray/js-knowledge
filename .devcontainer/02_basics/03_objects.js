
//singleton

//object literals

//interview
const Mysym= Symbol("key1")

const JsUser={
    name:"subha",
    [Mysym]:"mykey1",
    age:22,
    palce:"bbsr",
    email:"subha@yahoo.com"
}
console.log(JsUser["email"])
console.log(JsUser[Mysym])

JsUser.emial="subha@git.com"//this way we can chaneg the values
Object.freeze(JsUser)//doesnot allow to change the values
JsUser.emial="subha@mocrosoft.com"
console.log(JsUser)
