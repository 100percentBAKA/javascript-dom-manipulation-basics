const root = document.querySelector(":root");
const button = document.querySelector('.button');

button.addEventListener(
    'mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100,
            y = (e.clientY - rect.top) / rect.height * 100;

        root.style.setProperty("--gradient-pos-x", `${x}%`);
        root.style.setProperty("--gradient-pos-y", `${y}%`);
    }
);

button.addEventListener(
    'mouseout', (e) => {
        root.style.setProperty("--gradient-pos-x", `50%`);
        root.style.setProperty("--gradient-pos-y", `50%`);
    }
);

button.addEventListener(
    'click', (e) => {
        button.classList.add('clickable');

        setTimeout(() => {
            button.classList.remove('clickable');
        }, 80);

        // console.log("click");
    }
);