document.querySelector('.glow-image').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.glow-image').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
