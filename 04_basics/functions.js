


function sayMyName(){
    console.log("R")
console.log("o")
console.log("h")
console.log("i")
console.log("t")
console.log("a")
console.log("s")
console.log("h")
}

//sayMyName-->> this is called reference to the function

//sayMyName()--->>> this is called execution of the function

/*function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}*/

function addTwoNumbers(number1,number2){
    let a=number1+number2
    return a
}
const ans=addTwoNumbers(3,4)
//console.log(`the ans is ${ans}`)

function logInUserMessage(username="roo" /*default value*/){
    if(!username){
        console.log("naam to likhle bhai")
        return
    }
    return `the username is : ${username}`
}

//console.log(logInUserMessage("Rohitash"))


function calculateCartPrice(...num1){
    return num1;
}
//...--->>> this is called as rest operator used to pass multiple values to a function via same parameter as an array.

//console.log(calculateCartPrice(3,30,300))

const user={
    username:"Rohitash",
    price:199
}

function handleObject(anyObject){
    console.log(`the username is ${anyObject.username} and the price is ${anyObject.price}`)
}

//handleObject(user)

const arr=[3,2,3,3]

function arrayValue(Array){
    console.log(Array[2])
}

arrayValue(arr)