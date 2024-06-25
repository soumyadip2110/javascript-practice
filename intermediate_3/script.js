const randomColor = () => {
    let hexCode = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 16)
        color += hexCode[index]
    }
    return color
}

let intervalId;
const startChangingColor = function (){
    if (!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function (){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

// let startBtn = document.getElementById('start')
// let stopBtn = document.getElementById('stop')
// let body = document.querySelector('body')


// const changeBgColor = () => {
//     let hexCode = '0123456789ABCDEF'
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         const index = Math.floor(Math.random() * 16)
//         color += hexCode[index]
//     }
//     body.style.backgroundColor = color
// }

// let intervalId;

// startBtn.addEventListener('click', () => {
//     if (!intervalId){
//         intervalId = setInterval(changeBgColor, 1000)
//     }
// })

// stopBtn.addEventListener('click', () => {
//     clearInterval(intervalId)
//     intervalId = null
// })