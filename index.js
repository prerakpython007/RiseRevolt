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

  
  function composeEmail() {
    // Specify the email address
    var emailAddress = "khxrwaaa110.2005@gmail.com";
    // Open the user's default email client with a new email window
    window.location.href = "mailto:" + emailAddress;
}