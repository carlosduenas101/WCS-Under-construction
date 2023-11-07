document.addEventListener('DOMContentLoaded', (event) => {
  const toggleCheckbox = document.getElementById('tm');
  const menu = document.querySelector('.main-menu');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');

  // Function to check if we are within the specific media query
  function checkMediaQuery() {
    return window.matchMedia('(max-width: 877px) and (min-width: 360px)').matches;
  }

  // Function to toggle menu icons
  function toggleMenuIcons() {
    if (toggleCheckbox.checked) {
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }

  // Event listener for the checkbox change
  toggleCheckbox.addEventListener('change', function() {
    if (checkMediaQuery()) {
      // Toggle menu visibility based on checkbox state
      if (toggleCheckbox.checked) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
      // Toggle the menu icons
      toggleMenuIcons();
    }
  });

  // Initial check to hide the menu if within the media query
  if (checkMediaQuery()) {
    menu.style.display = 'none';
    // Ensure the hamburger icon is visible and the close icon is hidden initially
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});