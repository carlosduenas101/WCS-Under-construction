document.addEventListener('DOMContentLoaded', function() {
  const contactIcon = document.querySelector('.contact-icon');
  const contactForm = document.getElementById('contactForm');
  const closeIcon = document.getElementById('closeIcon');

  contactIcon.addEventListener('click', function() {
    contactForm.style.display = 'block';
    contactIcon.style.display = 'none';
  });

  closeIcon.addEventListener('click', function() {
    contactForm.style.display = 'none';
    contactIcon.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      alert(`Thank you, ${name}. Your message has been sent!`);
    } else {
      alert('Please fill in all fields.');
    }
  });
});