const coding=["python","javascript","cpp"]

coding.forEach( (item)=>{
   // console.log(item)
} )

//for each loop doesn't return any value

//filter---> returns value after checking a condition

const myNums=[1,2,3,4,5]

const newNums=myNums.filter((num)=> num>3)
newNums.forEach((item)=>{
    console.log(item)
})
