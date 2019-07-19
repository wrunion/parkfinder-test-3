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
var userInputs = [];

function getResult() {
  parkObjects.forEach(function(park) {
  if ((park.restroom === true) && (park.parking === true)) {
    userInputs.push(park.keyword);
  }
  });
}

function displayResult() {
  userInputs.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}



resultsArray = [];

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //Clear the form here

    $("input:checkbox[name=amenities]:checked").each(function() {
      resultsArray.push($(this).val());
    });

    console.log(resultsArray);
  });
});
