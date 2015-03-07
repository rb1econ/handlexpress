$(document).on('ready', function(){

  

  
  $('#searchLang').on('submit', function(e){
    e.preventDefault();
    var searchedLang = $('#searchBox').val();

    $.get('/search/'+searchedLang, function(data){
      console.log('searchedLang:::: ', data);
    });
  });


  // var $handlingBars = $('#results').html();
  var $handlingBars = 'Yo!! from Main JS';
  var template = Handlebars.compile($handlingBars);
  var context = {
    yourLang: 2// ajax call to search route. 
  };

  var html = template(context);
});