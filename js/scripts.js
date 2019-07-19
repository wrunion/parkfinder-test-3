//Business Logic
function Park(name, keyword, playground, parking, garden, restroom, accessibility, zone, pool) {
  this.name = name;
  this.keyword = keyword;
  this.playground = playground;
  this.parking = parking;
  this.garden = garden;
  this.restroom = restroom;
  this.accessibility = accessibility;
  this.zone = zone;
  this.pool = pool;
}

//Create a new object for each park
var rainbowPark = new Park("Rainbow Park", "rainbow", true, false, true, true, false, true, true);
var unicornPark = new Park("Unicorn Park", "unicorn", true, true, false, true, true, false, true);
var dragonPark = new Park("Dragon Park", "dragon", false, true, true, true, false, true, true);
var hobbitPark = new Park("Hobbit Park", "hobbit", true, false, true, true, true, false, false);
var galaxyPark = new Park("Galaxy Park", "galaxy", false, true, true, true, false, true, false);

//Array of park objects
var parkObjects = [rainbowPark, unicornPark, dragonPark, hobbitPark, galaxyPark];

//Let's assume our user wants restrooms and a park.
var resultsArray = [];

function getResult() {
  parkObjects.forEach(function(park) {
  if ((park.restroom === true) && (park.parking === true)) {
    resultsArray.push(park.keyword);
  }
  });
}

function displayResult() {
  resultsArray.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

// NOTE: Alright so here's the issue; I know how to get the data back from the user, and console.log that as an array. (If you check out the console on the test site, you can see that it's working.) I also know how to loop through the park objects and find ones that match a set of parameters (example above.)
//
// The big step that I'm missing is: how can I get the results from the userInputs array, and use them to populate the getResult function?

//Or am I thinking about this the wrong way entirely?





userInputs = [];

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //Clear the form here

    $("input:checkbox[name=amenities]:checked").each(function() {
      userInputs.push($(this).val());
    });

    console.log(userInputs);
  });
});
