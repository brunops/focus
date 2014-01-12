(function($) {
  var images = [
    'kidding.png',
    'look.png',
    'mog.jpg',
    'no.jpg'
  ];

  // document.ready short version
  $(function() {
    var imgPath = 'http://localhost/images/' + images[Math.floor(Math.random() * images.length)];

    var img = $('<img />')
      .attr('src', imgPath);

    $('body').append(img);
  });

})(jQuery);
