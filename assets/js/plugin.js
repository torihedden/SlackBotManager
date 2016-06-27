var rootURL = 'http://localhost:5000/SlackBotData';

$.ajax({
  url: rootURL,
  method: 'GET'
}).then(function(data) {

  for (i = 0; i < data[1].plugins.length; i++){

    var exampleObj = data[1].plugins[i].examples;

    var exampleString = "";

    for (var example in exampleObj) {
      exampleString += example + " = " + exampleObj[example] + "<br>";
    }


    $("tbody").append("<tr> <td>" + data[1].plugins[i].name + "</td><td>" + exampleString + "</td><td>" + "<button class='btn btn-primary'>Add to bot</button>" + "</td></tr>");

  }
});
