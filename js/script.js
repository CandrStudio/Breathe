var breathingMode = 'Calm';
var BreatheInTime = 5000;
var BreatheOutTime = 4000;

window.addEventListener('load', function() {
    // Show loading screen for 2.5 seconds
    setTimeout(function() {
      var loadingScreen = document.getElementById('loading-screen');
      loadingScreen.style.opacity = '0';
  
      // Hide loading screen and show app container
      setTimeout(function() {
        loadingScreen.style.display = 'none';
        var appContainer = document.getElementById('app-container');
        appContainer.style.opacity = '1';
      }, 1000);
    }, 2500);})
  

const circle = document.querySelector('.breathing-Circle');
const breathingText = document.querySelector('.breathing-text');

function breatheIn() {
    circle.style.transform = 'scale(1.5)';
    breathingText.textContent = 'Breathe In';
    breathingText.style.opacity = '1';
    setTimeout(() => {
        breathingText.style.opacity = '0';
    }, 4000);
    setTimeout(breatheOut, BreatheInTime);
}

function breatheOut() {
    circle.style.transform = 'scale(1)';
    breathingText.textContent = 'Breathe Out';
    breathingText.style.opacity = '1';
    setTimeout(() => {
        breathingText.style.opacity = '0';
    }, 3000);
    setTimeout(breatheIn, BreatheOutTime);
}

breatheIn();





 // Breathing mode button event listener
 breathingModeButton.addEventListener('click', function() {
    switch (breathingMode) {
      case 'Calm':
        breathingMode = 'Deep';
        break;
      case 'Deep':
        breathingMode = 'Sleep';
        break;
      case 'Sleep':
        breathingMode = 'Box';
        break;
      case 'Box':
        breathingMode = 'Calm';
        break;
    
    }
    breathingModeButton.textContent = breathingMode;
    updateBreathingPattern();
  });

  function updateBreathingPattern() {
    switch (breathingMode) {
      case 'Calm':
        breatheInTime = 5000;
        breatheOutTime = 4000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '5s ease-in, 4s ease-out';
        break;
      case 'Deep':
        breatheInTime = 8000;
        breatheOutTime = 6000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '8s ease-in, 6s ease-out';
        break;
      case 'Sleep':
        breatheInTime = 6000;
        breatheOutTime = 5000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '6s ease-in, 5s ease-out';
        break;
      case 'Box':
        breatheInTime = 5000;
        breatheOutTime = 5000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '5s ease-in, 5s ease-out';
        break;
    }
  }




//Load Thoughts JSON
window.addEventListener('load', function() {
  var phrases = [
    "Breathe in peace, exhale stress.",
    "Stillness leads to inner peace.",
    "Live and feel this moment.",
    "Mindfulness is freedom's path.",
    "Release past, embrace now.",
    "Accept what is, let go.",
    "Calmness is your superpower.",
    "Every breath rebalances you.",
    "Silence carries answers.",
    "Peace begins within.",
    "Embrace life in stillness.",
    "Seek balance, not perfection.",
    "Emotions are fleeting visitors.",
    "Inhale future, exhale past.",
    "Peace amid the storm.",
    "Let worries flow away.",
    "Mindful living is a journey.",
    "Bring your own sunshine.",
    "Be still, listen to world.",
    "Silence speaks volumes.",
    "Inner peace is self-control.",
    "Simplicity is sophistication.",
    "Find peace in yourself.",
    "Quieter minds hear more.",
    "Peace is accepting life.",
    "Adjust your sails.",
    "Find peace within.",
    "Let go of weak thoughts.",
    "Trust life's timing.",
    "Gratitude is enough.",
    "Inhale courage, exhale fear.",
    "Smile, breathe, go slowly.",
    "Happiness is a choice.",
    "Be here now.",
    "Silence is strength.",
    "You are the ocean.",
    "Realize your inner power.",
    "Present moment is all.",
    "Mind shapes your being.",
    "Breathe, anchor yourself.",
    "Return to present with breath.",
    "Relaxed body, inner peace.",
    "Silence the mind, heal soul.",
    "Don't dwell on yesterday.",
    "Calm mind, ultimate weapon.",
    "Meditation isn't controlling thoughts.",
    "Nourish yourself with silence.",
    "Embrace tranquility within.",
    "Harmony resides within you.",
    "Nature mirrors calmness.",
    "Just be present.",
    "Find joy in simplicity.",
    "You are enough.",
    "Embrace the journey.",
    "Calm is a super power.",
    "Breathe, you're alive.",
    "Flow with life.",
    "Your peace, your power.",
    "Witness life unfolding.",
    "Inhale peace, exhale chaos.",
    "Find beauty in stillness.",
    "Serenity in each breath.",
    "Be water, my friend.",
    "Dwell in possibility.",
    "Awaken to the moment.",
    "Soften into this moment.",
    "Rest in awareness.",
    "Let go, and grow.",
    "Exhale doubt, inhale courage.",
    "Feel, don't think.",
    "Your path is sacred.",
    "Patience fosters growth.",
    "Life flows like a river.",
    "Savor each moment.",
    "Calm amidst the chaos.",
    "Acceptance is freedom.",
    "Gratitude fuels happiness.",
    "Seek wisdom in silence.",
    "Peaceful heart, peaceful life.",
    "Balance is key.",
    "Your journey, your pace.",
    "Breathe out, release.",
    "Believe in your strength.",
    "Trust your inner wisdom.",
    "Compassion starts within.",
    "Live in gratitude.",
    "Inner peace, outer strength.",
    "Gentle is powerful.",
    "Be present, be free.",
    "Focus on now.",
    "Breathe in, let go.",
    "Calm mind, calm life.",
    "Feel life's rhythm.",
    "Surrender to serenity.",
    "One breath at a time.",
    "Listen to your heart."
  ]

  var randomIndex = Math.floor(Math.random() * phrases.length);
  var randomText = phrases[randomIndex];

  var phrase = document.getElementById("phrase");
  phrase.innerHTML = randomText;
});