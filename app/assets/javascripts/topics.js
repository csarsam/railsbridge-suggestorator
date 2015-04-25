
window.onload= function() {
  $('.arrow-down').click(function(event) {
    if ($(event.target).parent().parent().find('.score').text() == 0)
      return;

    $.ajax({
      method: 'POST',
      contentType: 'json',
      url: '/topics/' + event.target.id + '/downvote',
      success: function( data ) {
        $(event.target).parent().parent().find('.score').text(data);
      }
    });
  });

  $('.arrow-up').click(function(event) {
    $.ajax({
      method: 'POST',
      contentType: 'json',
      url: '/topics/' + event.target.id + '/upvote',
      success: function( data ) {
        $(event.target).parent().parent().find('.score').text(data);
      }
    });
  });
};
