var searchYouTube = (options, callback) => {
  //var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=' + options.key + '&q=' + options.query + '&maxResults=' + options.max;
  var url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
    url: url,
    type: 'GET',
    //data: {maxResults: 5},
    data: options,
    success: function(data) {
      console.log('Youtube videos are received! :)');
      //debugger;
      console.log(data);
      //Callback is triggered by receiving the videos array
      callback(data.items);
    },
    error: function(data) {
      console.log('Did not receive any video.');
      console.log(data);  //For debugging
    }
  });

};

window.searchYouTube = searchYouTube;
