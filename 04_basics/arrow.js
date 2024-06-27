const user={
    name:"rohitash",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.name},welcome to the website`)
        console.log(this)
    }
}

//user.welcomeMessage()
//user.name="Rohit"
//user.welcomeMessage()

//this means current context ,i.e. the values of the variables currently

//globally this is an empty object ,, but not in a block scope
function one(){
    console.log(this)
}

//arrow method--->>> used for consice and impilcit declaration of the functions;

/*const addTwo=(num1,num2) =>{
    return num1+num2
}*/
// it is necessary to use return keyword while using the curly braces

//const addTwo = (num1,num2)=> num1+num2 //this is also how it can be written without a return statement

//const addTwo =(num1,num2)=> (num1+num2) //this is also another way without using return statement

//Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log(`DB connected`)
})();//semi colon is necessary to stop IIFE.

//()first parenthesis is for scope ,, () second parenthesis is for execution.
//IIFE is used to counter Global scope variable pollution


(
    (name)=>{
        console.log(`my name is ${name}`)
    }
)("Rohitash");


