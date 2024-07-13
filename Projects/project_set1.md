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


# PROJECT 3

## Digital Clock

```JavaScript
const clock=document.getElementById('clock')
//const clock=document.querySelector('#clock')

//getting current time
const date=new Date();
console.log(date);

setInterval(function(){
  const date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)



```



# PROJECT 3

## guess number

```JavaScript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



```