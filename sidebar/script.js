const toggleButton = document.querySelector('toggle-button');

toggleButton.addEventListener(
    'click', () => {
        document.querySelectorAll('li').forEach(li => {
            li.classList.remove('hidden');
        });
    }
);