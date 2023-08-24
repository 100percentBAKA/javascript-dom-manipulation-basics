document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('#bubble-wrapper');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const animateBubble = (x, y) => {
        const bubble = document.createElement("div");

        bubble.className = "bubble";
        bubble.style.opacity = 0;
        bubble.style.backgroundColor = getRandomColor();

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        wrapper.appendChild(bubble);

        bubble.style.transition = "opacity 0.5s";
        bubble.style.opacity = 1;

        setTimeout(() => {

            bubble.style.opacity = 0;
            setTimeout(() => {
                wrapper.removeChild(bubble);
            }, 500);
        }, 2000);
    }

    window.onmousemove = event => {
        animateBubble(event.clientX, event.clientY);
    };
});
