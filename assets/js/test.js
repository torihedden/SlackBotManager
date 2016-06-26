
//an http request using jQuery. now to do this with React?

var rootURL = 'http://localhost:5000/SlackBotData';

$.ajax({
  url: rootURL,
  method: 'GET'
}).then(function(data) {
  console.log(data);
  // console.log(data[0].bots[0].bot.icon);
  // console.log(data[1].plugins);

  for (i = 0; i < data[0].bots.length; i++){
    $("tbody").append("<tr> <td>" + data[0].bots[i].bot.icon + "</td> <td>" + data[0].bots[i].bot.name + "</td> <td>" +  data[0].bots[i].bot.token + "</td> <td>" + data[0].bots[i].status.state + "</td> </tr>");
  }
});
