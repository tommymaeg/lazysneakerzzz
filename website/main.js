// === window When Loading === //

$(window).on("load",function () {
    var wind = $(window);
    wind.scroll();
    // Preloader
    /*$(".loading").fadeOut(500);*/
});




// Mail Manager
function loadEvents() {
  var mailString;
  function updateMailString() {
    mailString = '?subject=' + encodeURIComponent($('#form_subject').val()) + '&body=' + encodeURIComponent($('#form_message').val());
    $('#mail-link').attr('href',  'mailto:tommymaegerle@gmail.com' + mailString);
  }
  $( "#form_subject" ).focusout(function() { updateMailString(); });
  $( "#form_message" ).focusout(function() { updateMailString(); });
  updateMailString();
}
loadEvents();
