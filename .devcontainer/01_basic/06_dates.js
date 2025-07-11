
const mydate= new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)

const myfavdate = new Date(2022,8,29)//in js month start from '0'
console.log(myfavdate.toLocaleDateString())

const mynewfavdate = new Date("2023-01-07")//yy-mm-dd month starts from 0ne
console.log(mynewfavdate.toLocaleDateString())

const mybffavdate = new Date("01-13-1999")//mm-dd-yy
console.log(mybffavdate.toLocaleDateString())

let mytimestamp=  Date.now()//get value in mili-sec
//console.log(mytimestamp)
//console.log(mybffavdate.getTime())
//console.log(Math.floor(Date.now()/1000))//gives o/p in sec********INTERVIEW*****


let   my_date= new Date()
console.log(my_date)
console.log(my_date.getMonth())
console.log(my_date.getDay())


my_date.toLocaleString('default'{
    weekday: "long"/////imp and intresting
})


