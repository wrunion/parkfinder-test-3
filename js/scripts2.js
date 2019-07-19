//Full scripts file - lots of code I need to refactor.

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

//These come directly from the user, and will be different every time. The ones below are only for example purposes.


// function getResult() {
//   parkObjects.forEach(function(park) {
//     userInputs.forEach(function(input) {
//       if (park.input === true)
//     }
//   if ((park.restroom === true) && (park.parking === true)) {
//     resultsArray.push(park.keyword);
//   }
//   });
// }

var userInputs = ["playground", "parking", "garden"];


//
var resultsArray2 = [];

var userInputsLength = userInputs.length;

function getPlaygroundResult() {
  parkObjects.forEach(function(park) {
    if (park.playground === true) {
      resultsArray2.push(park.keyword);
    } else {
      resultsArray2.push(null);
    }
  });
}

function getParkingResult() {
  parkObjects.forEach(function(park) {
    if (park.parking === true) {
      resultsArray2.push(park.keyword);
    } else {
      resultsArray2.push(null);
    }
  });
}

function getGardenResult() {
  parkObjects.forEach(function(park) {
    if (park.garden === true) {
      resultsArray2.push(park.keyword);
    } else {
      resultsArray2.push(null);
    }
  });
}


// var resultsFinal = [];
//
// function resultLoop() {
//   userInputs.forEach(function(input) {
//     parkObjects.forEach(function(park) {
//       if (park.input === true) {
//
//       }
//     });
// });
// }
//









//Let's assume our user wants restrooms and a park.
// var resultsArray = [];
//
// function getResult() {
//   parkObjects.forEach(function(park) {
//   if ((park.restroom === true) && (park.parking === true)) {
//     resultsArray.push(park.keyword);
//   }
//   });
// }
//
// function displayResult() {
//   resultsArray.forEach(function(park) {
//     var text = document.getElementById(park + "-result");
//     text.style.display = "block";
//   });
// }

//TO READ:
//https://stackoverflow.com/questions/8517089/js-search-in-object-values


//Creating an array of parks, sorted by each individual amenity. NOTE: this code will probably be redundant by the time we're done.
var playgroundParks = [];
var parkingParks = [];
var gardenParks = [];
var restroomParks = [];
var accessibilityParks = [];
var zoneParks = [];
var poolParks = [];

function findPlaygroundParks(park) {
  parkObjects.forEach(function(park) {
    if (park.playground == true) {
      playgroundParks.push(park.keyword);
    }
  });
}

function findParkingParks(park) {
  parkObjects.forEach(function(park) {
    if (park.parking == true) {
      parkingParks.push(park.keyword);
    }
  });
}

function findGardenParks(park) {
  parkObjects.forEach(function(park) {
    if (park.garden == true) {
      gardenParks.push(park.keyword);
    }
  });
}

function findRestroomParks(park) {
  parkObjects.forEach(function(park) {
    if (park.restroom == true) {
      restroomParks.push(park.keyword);
    }
  });
}

function findAccesibilityParks(park) {
  parkObjects.forEach(function(park) {
    if (park.accessibility == true) {
      accessibilityParks.push(park.keyword);
    }
  });
}

function findZoneParks(park) {
  parkObjects.forEach(function(park) {
    if (park.zone == true) {
      zoneParks.push(park.keyword);
    }
  });
}

function findPoolParks(park) {
  parkObjects.forEach(function(park) {
    if (park.pool == true) {
      poolParks.push(park.keyword);
    }
  });
}

//Array of park name KEYWORDS for manipulating the DOM
var parkNames = ["rainbow", "unicorn", "dragon", "hobbit", "galaxy"];

//To show all parks with jQuery
function showAllParks() {
  parkNames.forEach(function(park) {
    $("#" + park + "-result").show();
  });
}

//To hide all parks with jQuery
function hideAllParks() {
  parkNames.forEach(function(park) {
    $("#" + park + "-result").hide();
  });
}

//Functions to show parks by feature
function showPlaygroundParks() {
  playgroundParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showParkingParks() {
  parkingParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showGardenParks() {
  gardenParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showRestroomParks() {
  restroomParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showAccessibilityParks() {
  accessibilityParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showZoneParks() {
  zoneParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showPoolParks() {
  poolParks.forEach(function(park) {
    var text = document.getElementById(park + "-result");
    text.style.display = "block";
  });
}

function showAllParks() {
  parkNames.forEach(function(park) {
    $("#" + park + "-result").show();
  });
}

//Simple functions to show the parks (pure JS version)
// function showUnicornPark() {
//   var text = document.getElementById("unicorn-result");
//   text.style.display = "block";
// }
//
// function showUnicornPark() {
//   var text = document.getElementById("unicorn-result");
//   text.style.display = "block";
// }
//
// function showDragonPark() {
//   var text = document.getElementById("dragon-result");
//   text.style.display = "block";
// }
//
// function showHobbitPark() {
//   var text = document.getElementById("hobbit-result");
//   text.style.display = "block";
// }
//
// function showGalaxyPark() {
//   var text = document.getElementById("galaxy-result");
//   text.style.display = "block";
// }

//Simple functions to hide the parks
function hideRainbowPark() {
  $("#rainbow-result").hide();
}

function hideUnicornPark() {
  var text = document.getElementById("unicorn-result");
  text.style.display = "none";
}

function hideDragonPark() {
  var text = document.getElementById("dragon-result");
  text.style.display = "none";
}

function hideHobbitPark() {
  var text = document.getElementById("hobbit-result");
  text.style.display = "none";
}

function hideGalaxyPark() {
  var text = document.getElementById("galaxy-result");
  text.style.display = "none";
}

//Complex functions sorted by feature
// function showPlayground() {
//   var checkBox = document.getElementById("playground");
//   var text = document.getElementById("playground-result");
//   if (checkBox.checked == true){
//   text.style.display = "block";
//   } else {
//    text.style.display = "none";
//  }
// }

var userInputs = [];

//UI Logic
$(document).ready(function() {

  //Hide results div
  $(".hidden").hide();

  //Run all the functions to populate the arrays with the corresponding park names. This doesn't put the text anywhere; it just populates the arrays, which we then can display when we want to.
  findPlaygroundParks();
  findParkingParks();
  findGardenParks();
  findRestroomParks();
  findAccesibilityParks();
  findZoneParks();
  findPoolParks();

  $("form").submit(function(event) {
    event.preventDefault();

    //Clear the form here

    $("input:checkbox[name=amenities]:checked").each(function() {
      userInputs.push($(this).val());
    });

    console.log(userInputs);

    // var amenities = $("input:checkbox[name=amenities]:checked").val();

  });
});
