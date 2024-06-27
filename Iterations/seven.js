const MyNum=[1,2,3,4,5,6,7,8,9,0]
//map===filter
//const newNum=MyNum.map((item)=> item+10)
//console.log(newNum)

//nested map
const newNum=MyNum.map((item)=>item*10).map((item)=>item+1).filter((item)=>item<3)
console.log(newNum)