//phone checker
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = ()=> {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let autoSliderIndex = 0

const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(tabIndex);
                autoSliderIndex = tabIndex;
            }
        })
    }
}
const autoSlider = () => {
    setInterval(() => {
        autoSliderIndex++
        if (autoSliderIndex > tabContentBlocks.length - 1) {
            autoSliderIndex = 0
        }
        hideTabContent()
        showTabContent(autoSliderIndex)
    }, 3000)
}

autoSlider(autoSliderIndex);


