$(document).on('ready', function(){

  
  var langName = '';
  var langDesc = '';
  
  $('#searchLang').on('submit', function(e){
    e.preventDefault();
    var searchedLang = $('#searchBox').val();

    $.get('/search/'+searchedLang, function(data){
      langName = data.key;
      langDesc = data.description;
      console.log('searchedLang:::: ', data.key, '; The Description:::: ', data.description);

      $('#results').html('');
      $('#results').append('<p>'+langName+'</p><p>'+langDesc+'</p>');

    });
  });


  // var $handlingBars = $('#results').html();
  // var $handlingBars = $('#searchResults').html();
  // var template = Handlebars.compile($handlingBars);
  // var context = {
  //   yourLang: langName,
  //   theDescription: langDesc
  // };

  // var html = template(context);
});