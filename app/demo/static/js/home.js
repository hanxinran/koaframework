(function($) {
  $.get('/data/info/repo', function(res) {
    console.log(res)
  })
  $.get('/data/info/douban', function(res) {
    console.log(res)
  })
})(jQuery)
