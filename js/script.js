$(document).ready(function() {
  $('#height-form').submit(function (event) {
    event.preventDefault();
    const height = $('#height-input').val();
    if (height < 89) {
      window.location.href = "short.html";
    } else if (height >= 122) {
      window.location.href = "tootall.html";
    } else {
      window.location.href = "tall.html";
    }
  })

  $('#tooTall-btn').click(function() {
    $('.colour').removeClass("addcolour");
    $('.colour').addClass("addcolour");
    $('.none').show();
  });
  $('#short-btn').click(function() {
    $('.colour').removeClass("addcolour");
    $('.colour').addClass("addcolour");
    $('.none').show();
  });
  bhjgvjgfvghhgfghg
});