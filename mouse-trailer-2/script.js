const trailer = document.querySelector('.trailer');

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframe = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
    }

    trailer.animate(
        keyframe,
        {
            duration: 800, //ms
            fill: 'forwards'
        }
    )
}

window.addEventListener(
    'mousemove', (e) => {

        const interactable = e.target.closest(".interactable"),
            interacting = interactable !== null;

        animateTrailer(e, interacting);

        const trailerIcon = document.querySelector('#trailer-icon');

        // trailer.dataset.type = interacting ? interactable.dataset.type : "";

        if (interacting) {
            trailerIcon.className = getTrailerClass(interactable.dataset.type);
        }
        else {
            trailerIcon.className = "";
        }
    }
);

const getTrailerClass = type => {
    switch (type) {
        case "link":
            return 'bx bx-link-alt';
        default:
            return 'bx bx-play';
    }
}