'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal-button');
const buttonOpenModal = document.querySelectorAll('.open-modal-button');

console.log(buttonOpenModal);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// buttonOpenModal is a node list
for (let i = 0; i < buttonOpenModal.length; i++) {
    buttonOpenModal[i].addEventListener(
        'click', openModal
    )
}

buttonCloseModal.addEventListener(
    'click', closeModal
)

// Handling key events
document.addEventListener(
    'keydown', function (event) {
        if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    }
)