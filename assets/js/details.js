var rootURL = 'http://localhost:5000/SlackBotData';

$.ajax({
  url: rootURL,
  method: 'GET'
}).then(function(data) {

  var rootBot = data[0].bots[0].bot;
  console.log(rootBot);

  $(".bot-details").append("<div>" + rootBot.icon + "</div>");
  $(".bot-details").append("<div>" + rootBot.name + "</div>");

});
