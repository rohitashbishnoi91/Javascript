//reduce method
const myNum=[1,2,4]

/*const myTotal=myNum.reduce(function(acc,currValue){
    console.log(`value of acc>:${acc},, value of currValue : ${currValue}`)
    return acc+currValue
},9)*/


const myTotal=myNum.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)