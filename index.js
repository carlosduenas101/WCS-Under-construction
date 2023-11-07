const textElement = document.getElementById('animated-text');
const words = textElement.textContent.trim().split(' ');
textElement.textContent = '';

words.forEach((word, index) => {
  const span = document.createElement('span');
  span.textContent = word;
  span.style.animation = `fade-in 1.5s ${index * 0.5}s forwards`;
  span.style.display = 'block';
  textElement.appendChild(span);
});

function closeFloatingWindow() {
  var floatingWindow = document.querySelector('.floating-window');
  floatingWindow.style.display = 'none';
}

function closeFloatingWindow() {
  var floatingWindow = document.getElementById('floatingWindow');
  floatingWindow.classList.add('zoom-out');

  setTimeout(function() {
    floatingWindow.style.display = 'none';
    floatingWindow.classList.remove('zoom-out');
  }, 300);
}





