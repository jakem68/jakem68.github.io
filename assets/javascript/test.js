

// Select the button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})



$(document).ready(function () {
  $('.nav a').click(function(e) {

      $('.nav .active').removeClass('active');

      // var $parent = $(this).parent();
      // $parent.addClass('active');
      $(this).addClass('active');
      e.preventDefault();
  });
});
