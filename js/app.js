const circle = document.querySelector('.circle');
const breathingText = document.querySelector('.breathing-text');

function breatheIn() {
    circle.style.transform = 'scale(1.5)';
    breathingText.textContent = 'Breathe In';
    breathingText.style.opacity = '1';
    setTimeout(() => {
        breathingText.style.opacity = '0';
    }, 4000);
    setTimeout(breatheOut, 5000);
}

function breatheOut() {
    circle.style.transform = 'scale(1)';
    breathingText.textContent = 'Breathe Out';
    breathingText.style.opacity = '1';
    setTimeout(() => {
        breathingText.style.opacity = '0';
    }, 3000);
    setTimeout(breatheIn, 4000);
}

breatheIn();


// Mute/Unmute button functionality
const muteBtn = document.getElementById('mute-btn');
let isMuted = true;

// Background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 1;
backgroundMusic.play();

/* ... */

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    muteBtn.src = isMuted ? './img/icons/volume-off.svg' : './img/icons/volume-on.svg';
    
    if (isMuted) {
        fadeOutMusic();
    } else {
        fadeInMusic();
    }
});

function fadeOutMusic() {
    let volume = 1;
    const fadeOutInterval = setInterval(() => {
        volume = 0;
        backgroundMusic.volume = volume;

        if (volume <= 0) {
            backgroundMusic.pause();
            clearInterval(fadeOutInterval);
        }
    }, 100);
}

function fadeInMusic() {
    let volume = 0;
    backgroundMusic.volume = volume;
    backgroundMusic.play();
    const fadeInInterval = setInterval(() => {
        volume = 0.1;
        backgroundMusic.volume = volume;

        if (volume >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 100);
}

//Load Thoughts JSON
window.addEventListener('load', function() {
    fetch('./json/thoughts.json')
    .then(response => response.json())
    .then(data => {
        const phrases = data.phrases;
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        document.getElementById('phrase').innerText = randomPhrase;
    })
    .catch(error => console.error('Error:', error));
});
