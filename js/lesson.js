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

//converter

const usd = document.querySelector('#usd')
const som = document.querySelector('#som')
const eur = document.querySelector('#eur')
//dry
const converter = (element, targetElement, current, targetElement2) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json")
            const data = await response.json()

            switch (current) {
                case "som":
                    targetElement.value = (element.value * data.som.usd).toFixed(2)
                    targetElement2.value = (element.value * data.som.eur).toFixed(2)
                    break
                case "usd":
                    targetElement.value = (element.value * data.usd.som).toFixed(2)
                    targetElement2.value = (element.value * data.usd.eur).toFixed(2)
                    break
                case "eur":
                    targetElement.value = (element.value * data.eur.usd).toFixed(2)
                    targetElement2.value = (element.value * data.eur.som).toFixed(2)
                    break
                default:
                    break
            }

            element.value === '' && (targetElement.value = '')

        } catch (e) {
            console.log(e)
        }
    }
}

converter(som, usd, 'som', eur)
converter(usd, eur, 'usd', som)
converter(eur, usd, 'eur', som)

//card switcher

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')

let countCard = 1

const cardSwitcher = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${countCard}`)
        const data = await response.json()
        card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
    } catch (e) {

    }
}
cardSwitcher()
btnNext.addEventListener('click', () => {
    countCard++;
    if (countCard > 200) {
        countCard = 1;
    }
    cardSwitcher();
});

btnPrev.addEventListener('click', () => {
    countCard--;
    if (countCard < 1) {
        countCard = 200;
    }
    cardSwitcher();
});

//2
const variable = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    } catch (e) {

    }
}
variable()
//weather

const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    cityNameInput.addEventListener('input', async (event) => {
        try {
            const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${cityNameInput.value}&appid=${API_KEY}`)
            const data = await response.json()
            city.innerHTML = data.name ? data.name : 'Город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + '&deg;C' : '...'

        } catch (e) {

        }
    })
}
citySearch()

