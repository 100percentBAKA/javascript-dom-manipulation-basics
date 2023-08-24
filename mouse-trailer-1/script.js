coords = { x: 0, y: 0 };

window.addEventListener(
    'mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    }
);

const circles = document.querySelectorAll('.circle');

const colors = [
    "#595c34", "#5e5d34", "#6a6134", "#7f6538", "#9a6842",
    "#b76b55", "#d06e74", "#e17599", "#e681c0", "#e18fe1",
    "#d89af7", "#d39eff"
];


circles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;

    circle.style.backgroundColor = colors[index % colors.length];
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    console.log(x, y);

    circles.forEach((circle, index) => {
        circle.style.left = x - circle.offsetWidth / 2 + "px";
        circle.style.top = y - circle.offsetHeight / 2 + "px";

        circle.style.scale = (circles.length - index) / circles.length; // reverses the indices 

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.30;
        y += (nextCircle.y - y) * 0.30;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();





