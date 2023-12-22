// 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

// 2
const childBlock = document.querySelector('.child_block')

const moveSpeedChildBlock = 5
const parentBlockWidth = 449
let positionX = 0
let positionY = 0

const moveBlock =() => {
        if (positionX < parentBlockWidth && positionY === 0) {
            positionX++
            childBlock.style.left = `${positionX}px`
            setTimeout(moveBlock,moveSpeedChildBlock)
        }else if (positionX >= parentBlockWidth && positionY < parentBlockWidth) {
            positionY++
            childBlock.style.top = `${positionY}px`
            setTimeout(moveBlock, moveSpeedChildBlock)
        }else if (positionY >= parentBlockWidth && positionX > 0) {
                positionX--
                childBlock.style.left = `${positionX}px`
                setTimeout(moveBlock, moveSpeedChildBlock)
        } else if (positionX >= 0 && positionY > 0) {
                positionY--
                childBlock.style.top = `${positionY}px`
                setTimeout(moveBlock, moveSpeedChildBlock)
            }
}
moveBlock()

//h/w 2
//2
const intervalCount = document.querySelector('.interval')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
let num = 0
let interval

startButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        num++
        intervalCount.innerText = num
    },1000)
}
stopButton.onclick= () => {
    clearInterval(interval)
}
resetButton.onclick = () => {
    clearInterval(interval)
    num = 0
    intervalCount.innerText = num
}