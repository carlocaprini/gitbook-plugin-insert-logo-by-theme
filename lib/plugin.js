require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = ''
  var style = ''
  var insertLogo = function (url_white, url_sepia, url_night, style) {
    $('.book-summary').children().eq(0).before('<div class="book-logo logo-white"><img src="' + url_white + '" style="' + style + '"></div>')
    $('.book-summary').children().eq(0).before('<div class="book-logo logo-sepia"><img src="' + url_sepia + '" style="' + style + '"></div>')
    $('.book-summary').children().eq(0).before('<div class="book-logo logo-night"><img src="' + url_night + '" style="' + style + '"></div>')
  }
  gitbook.events.bind('start', function (e, config) {
    url_white = config['insert-logo-by-theme']['white']
    url_sepia = config['insert-logo-by-theme']['sepia']
    url_night = config['insert-logo-by-theme']['night']
    style = config['insert-logo-by-theme']['style']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(url_white, url_sepia, url_night, style)
  })
})
