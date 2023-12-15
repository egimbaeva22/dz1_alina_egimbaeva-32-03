//modal

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeModalButton = document.querySelector('.modal_close');


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
};

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
};

modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => event.target === modal && closeModal();

setTimeout(openModal, 10000);

const scrollWindow = () => {
    const windowHeight = window.innerHeight
    const scrollDistance = window.scrollY
    const documentHeight = document.body.scrollHeight
    if (windowHeight + scrollDistance >= documentHeight - 1) {
        openModal()
        window.removeEventListener("scroll", scrollWindow)
    }
}

window.addEventListener("scroll", scrollWindow)