document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
      var icon = this.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
  