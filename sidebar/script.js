const menuButton = document.querySelector('#menu-button');
const sidebar = document.querySelector('.sidebar');

menuButton.addEventListener(
    'click', function () {
        sidebar.classList.toggle('open');
    }
)