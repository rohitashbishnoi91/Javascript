/*for(let index=0;index<10;index++){
    const element=index
    if(element==5){
        console.log("5 is the best number")
    }
    console.log(index)
}*/

/*for(let i=0;i<11;i++){
    console.log(`outer loop value is : ${i}`)
    for(let j=0;j<11;j++){
        console.log(`inner loop value is : ${j}`)
    }
}*/

let myArray=["flash","batman","superman"]

for(let index=0;index<myArray.length;index++){
    const element=myArray[index]
    //console.log(element)
}

//keywords
//break an continue

for(let i=1;i<=20;i++){
    if(i==5) continue
    console.log(`value of i is : ${i}`)
    
}