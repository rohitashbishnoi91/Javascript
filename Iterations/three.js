//for of loop(array specific)

//["","",""]
//[{},{},{}]

const arr=[1,2,3,45,5]

//syntax:
//for(const num of object(jiske upar laga rhe)){
//
//}

//eg
for (const num of arr){
    //console.log(num)
}

const greetings="rohitash hi "
for(const greet of greetings){
    //console.log(greet)
}

//maps

const map=new Map()//holds key value pair,, rememebrs the order of insertion,, no duplicate values
map.set('IND',"INdia")
map.set('USA',"United States Of America")
map.set('FR',"France")

//console.log(map)

for(const [key,value] of map){
    console.log(key,'->',value)
}
    

