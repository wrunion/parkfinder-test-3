/*jshint esversion: 6 */

//Business Logic
function Park(name, keyword, amenities) {
  this.name = name;
  this.keyword = keyword;
  this.amenities = amenities;
}

//Create a new object for each park, listing its name, keyword, and amenities
var rainbowPark = new Park("Rainbow Park", "rainbow", ["rainbow", "playground", "parking", "garden", "restroom", "zone"]);
var unicornPark = new Park("Unicorn Park", "unicorn", ["unicorn", "playground", "parking", "restroom", "accessibility", "pool"]);
var dragonPark = new Park("Dragon Park", "dragon", ["dragon", "parking", "garden", "restroom", "accessibility", "zone", "pool"]);
var hobbitPark = new Park("Hobbit Park", "hobbit", ["hobbit", "playground", "garden",  "restroom", "accessibility", "pool"]);
var galaxyPark = new Park("Galaxy Park", "galaxy", ["galaxy", "parking", "garden", "accessibility", "zone", "pool"]);

//Amenities arrays
var rainbowAmenities = rainbowPark.amenities;
var unicornAmenities = unicornPark.amenities;
var dragonAmenities = dragonPark.amenities;
var hobbitAmenities = hobbitPark.amenities;
var galaxyAmenities = galaxyPark.amenities;

//Array of park objects
var parkObjects = [rainbowPark, unicornPark, dragonPark, hobbitPark, galaxyPark];
//Array of park keywords, useful for manipulating the DOM
var parkKeywords = ["rainbow", "unicorn", "dragon", "hobbit", "galaxy"];

//An array of all available amenities
var amenities = ["playground", "parking", "garden", "restroom", "accessibility", "zone", "pool"];


// var parks = [
//     'unicorn playground restroom',
//     'joe shmoe boo',
//     'rainbow restroom playground joy ha'];

var allAmenities = [rainbowAmenities, unicornAmenities, dragonAmenities, hobbitAmenities, galaxyAmenities];
var results = [];

function findRequiredMatches() {
    var containsAll;
    for (var i = 0; i < allAmenities.length; i++) {
        containsAll = true;
        for (var j = 0; j < requiredAmenities.length; j++) {
            if (allAmenities[i].indexOf(requiredAmenities[j]) === -1) {
                containsAll = false;
                break;
            }
        }
        if (containsAll) results.push(allAmenities[i]);
    }
    console.log(results);
}

nameArray = [];

function getNames() {
    for (var i=0; i<results.length; i++) {
      var a = results[0];
      var final = a.shift();
      nameArray.push(final);
      results.splice(-1);
    }
}

//Create arrays for each object that we can compare to results array
// function createAmenitiesArray(parkName) {
//   parkObjects.forEach(function(park) {
//     return parkName.
//   });
// }


function showRainbowPark() {
  var text = document.getElementById("rainbow-result");
  text.style.display = "block";
}

function showUnicornPark() {
  var text = document.getElementById("unicorn-result");
  text.style.display = "block";
}

function showDragonPark() {
  var text = document.getElementById("dragon-result");
  text.style.display = "block";
}

function showHobbitPark() {
  var text = document.getElementById("hobbit-result");
  text.style.display = "block";
}

function showGalaxyPark() {
  var text = document.getElementById("galaxy-result");
  text.style.display = "block";
}

//Array of park objects
var parkObjects = [rainbowPark, unicornPark, dragonPark, hobbitPark, galaxyPark];
//Array of park keywords, useful for manipulating the DOM
var parkKeywords = ["rainbow", "unicorn", "dragon", "hobbit", "galaxy"];

//An array of all available amenities
var amenities = ["playground", "parking", "garden", "restroom", "accessibility", "zone", "pool"];
var requiredAmenities = [];
var preferredAmenities = [];

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("form").hide();
    //Clear the form here
    //Have a popup box to tell them to answer all the questions if they haven't

    amenities.forEach(function(amenity) {
      var amenityValue = $("input:radio[name=" + amenity + "]:checked").val();
      if (amenityValue === "true") {
        requiredAmenities.push(amenity);
      } else if (amenityValue === "preferred") {
        preferredAmenities.push(amenity);
      }
    });

    console.log(requiredAmenities);
    findRequiredMatches();
    // getNames();
    // console.log(nameArray);
    // console.log(preferredAmenities);
    // console.log(results);
    // .each(function() {
    //   userInputs.push($(this).val());
    // });

    // console.log(userInputs);
  });
});
