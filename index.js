var image = document.getElementById('moving-image');
image.addEventListener('click', function() {
    image.classList.toggle('move');
});

const motionObject = document.getElementById('pointing');
const triggerArea = document.getElementById('trigger-area');

triggerArea.addEventListener('mouseenter', () => {
    motionObject.style.animationPlayState = 'running'; // Start the animation
});

triggerArea.addEventListener('mouseleave', () => {
    motionObject.style.animationPlayState = 'paused'; // Pause the animation
});
