const coding=["java","python","javascript","cpp"]

coding.forEach( function(item){ //its a callback function so it doesnt need to be named
    console.log(item)
})

//arrow function revision
name = (parameter) => {}

coding.forEach( (item) => {console.log(item)} )

function Print(item){
console.log(item)
}

coding.forEach(Print)
