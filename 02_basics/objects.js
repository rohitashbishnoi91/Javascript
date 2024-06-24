//singleton->uniqueor not instances made via constructor not literal
//object.create--->>> constructor
//symbol primitive datatype
const mySym=Symbol("hi")

//object literal
const JSUser={name:"Rohitash",age:21,location:"Jodhpur",
    email:"bishnoi.3@iitj.ac.in",
    "How are you":"fine",
    ["mySym"]:"rohit",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"]}   //key value pairs

/*console.log(JSUser.email)
console.log(JSUser["email"])//very useful when the key is a string
console.log(JSUser["How are you"])
console.log(JSUser["mySym"])*/


//Object.freeze(JSUser)//the changes won't propgate further


JSUser.greeting=function(){
    console.log("hello bro")
}

//console.log(JSUser.greeting)//function not executed but a reference to it returned
//console.log(JSUser.greeting())//function executed succesfully
//string interpolation--->>> when you add a variable inside the string
JSUser.greeting=function(){
    console.log(`hello bro ${this.name}`)
}
console.log(JSUser.greeting())