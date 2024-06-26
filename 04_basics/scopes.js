if(true){
    let a=10
const b=20
var c=30
}
//console.log(a)
//console.log(b)
//console.log(c)
//declaring a variable via var or no keyworrd leads to not availability of scope,, so use let and const always

//nested scope
function one(){
    const username="Rohitash"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

//one()

//hoisting in js(multiple ways to declare a function)
//console.log(addOne(3))//----->>>Valid
function addOne(num){
     return num+1
}
//console.log(num2(4))---->>> IN VALID
const num2=function(num){
    return num+1
}

