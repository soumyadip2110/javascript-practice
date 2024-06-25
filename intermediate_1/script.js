let randomNumber = parseInt(Math.random() * 100) + 1

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const previousGuesses = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')
const hintMessage = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let numGuess = 0
let playGame = true

submit.addEventListener('click', function (e) {
    e.preventDefault()
    validateGuess(parseInt(userInput.value))
})

function validateGuess(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        displayMessage('Invalid guess')
    } else {
        numGuess++
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right')
        endGame()
    } else if (numGuess === 10) {
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is too low')
    } else {
        displayMessage('Number is too high')
    }
}

function displayMessage(message) {
    hintMessage.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess) {
    userInput.value = ''
    previousGuesses.innerHTML += `${guess} `
    remainingGuesses.innerHTML = `${10 - numGuess}`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100) + 1
        numGuess = 0
        previousGuesses.innerHTML = ''
        remainingGuesses.innerHTML = '10'
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        hintMessage.innerHTML = ''
        playGame = true
    })
}
