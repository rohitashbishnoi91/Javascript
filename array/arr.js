const myArr=[1,2,3,4,5]
console.log(myArr[3])
//shallow copy
//resizebale
const myArr2=new Array(3,2,3,2)
console.log(myArr[2])

//array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr)

//slice,splice
console.log("A ",myArr);

const myna1=myArr.slice(1,3)
console.log(myna1)
console.log("B",myArr)

const myna2=myArr.splice(1,3)
console.log(myna2)
console.log("C",myArr)
