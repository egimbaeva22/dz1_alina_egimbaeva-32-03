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
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let position = 0

const moveBlock =() => {
    setTimeout(() =>{
        position += 1
        childBlock.style.left = `${position}px`
        if (position < 449) {
            moveBlock()
        }
    },10)
}
moveBlock()




