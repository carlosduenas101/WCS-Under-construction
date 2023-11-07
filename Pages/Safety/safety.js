document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll('.container');

  containers.forEach(function(container) {
    var label = container.querySelector('label');
    label.addEventListener('click', function() {
      var plusIcon = container.querySelector('.fa-plus');
      var minusIcon = container.querySelector('.fa-minus');
      
      if (plusIcon.style.display === 'none') {
        plusIcon.style.display = 'inline-block';
        minusIcon.style.display = 'none';
      } else {
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'inline-block';
      }
    });
  });
});