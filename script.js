// script.js

const message = document.getElementById('message');
const overlay = document.getElementById('overlay');

let index = 0;

function showNextLetter() {
  if (index < message.textContent.length) {
    message.style.opacity = 1;
    message.innerHTML += message.textContent.charAt(index);
    index++;
    setTimeout(showNextLetter, 100); // Adjust the timing between letters
  } else {
    setTimeout(() => {
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 500); // Adjust the timing before overlay removal
    }, 1000); // Adjust the timing before overlay fades out
  }
}

showNextLetter();
