# PROJECTS RELATED TO DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3peoyw?file=index.html)


# solution code

# project 1
```JavaScript
console.log("Rohitash")
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',(event)=>{
    console.log(event)
    console.log(event.target)
    if(event.target.id=='yellow'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='white'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='grey'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='blue'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='purple'){
      body.style.backgroundColor=event.target.id
    }
  })
})


```

# PROJECT 2

## project 2 solution

```JavaScript
const form=document.querySelector('form')


form.addEventListener('submit',(event)=>{
   event.preventDefault()

   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')

   if(height<0 || height===''|| isNaN(height)){
     results.innerHTML=`please give valid height ${height}`
   }
   else if(weight<0 || weight===''|| isNaN(weight)){
    results.innerHTML=`please give valid height ${weight}`
  }
  else{
    const BMI=(weight/((height*height)/10000)).toFixed(2)

    results.innerHTML=`<span>${BMI}</span>`
    if(BMI<18.6){
       results.innerHTML=` ${BMI} you are under Weight , please increase your diet`
    }
    else if(BMI>24.9){
       results.innerHTML=` ${BMI} you are overweight , increase exercising and decrease food intake`
    }
    else{
      results.innerHTML=` ${BMI} you are fit , keep on exercising and have a healthy lifestyle`
    }
  }
})

```
