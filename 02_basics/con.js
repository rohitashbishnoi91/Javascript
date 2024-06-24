//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Bishnoi"
tinderUser.isLoggedIn=false

//console.log(tinderUser)
/*const regularUser={
    email:"hello.com",
    fullName:{
      userfullName:{
        firstName:"Rohitash",
        lastName:"Bishnoi"
      }
    }
}
console.log(regularUser.fullName.userfullName.firstName)*/

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj={...obj1,...obj2}//spread operator
console.log(obj)
