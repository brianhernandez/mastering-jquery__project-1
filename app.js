$(document).ready(function() {
  var $users = $('.users');

  $.get('data/users.json', function(data) {
    $(data).each(function(index) {
      $users.append('');
    });
  )});
});
