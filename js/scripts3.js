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
var parkKeywords = ["rainbow", "unicorn", "dragon", "hobbit", "galaxy"];

//TO COMPARE THE ARRAYS:
//https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe



//Let's assume our user wants restrooms and a park.
// var resultsArray = [];

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


trueFalseUserInputs = [];
preferredAmenities = [];

//UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //Clear the form here
    //Have a popup box to tell them to answer all the questions if they haven't

    var amenities = ["playground", "parking", "garden", "restroom", "accessibility", "zone", "pool"];

    amenities.forEach(function(amenity) {
      var amenityValue = $("input:radio[name=" + amenity + "]:checked").val();
      if (amenityValue === "true") {
        trueFalseUserInputs.push(true);
      } else if (amenityValue === "false") {
        trueFalseUserInputs.push(false);
      } else {
        trueFalseUserInputs.push(false);
        preferredAmenities.push(amenityValue);
      }
    });


    //
    // var playgroundValue = $("input:radio[name=playground]:checked").val();
    // console.log(playgroundValue);
    // if (playgroundValue === "true") {
    //   trueFalseUserInputs.push(true);
    // } else if (playgroundValue === "false") {
    //   trueFalseUserInputs.push(false);
    // } else {
    //   trueFalseUserInputs.push(false);
    //   preferredAmenities.push(playgroundValue);
    // }
    //
    // var parkingValue = $("input:radio[name=parking]:checked").val();
    // console.log(parkingValue);
    // if (parkingValue === "true") {
    //   trueFalseUserInputs.push(true);
    // } else if (parkingValue === "false") {
    //   trueFalseUserInputs.push(false);
    // } else {
    //   trueFalseUserInputs.push(false);
    //   preferredAmenities.push(parkingValue);
    // }
    //
    // var gardenValue = $("input:radio[name=garden]:checked").val();
    // console.log(gardenValue);
    // if (gardenValue === "true") {
    //   trueFalseUserInputs.push(true);
    // } else if (gardenValue === "false") {
    //   trueFalseUserInputs.push(false);
    // } else {
    //   trueFalseUserInputs.push(false);
    //   preferredAmenities.push(gardenValue);
    // }
    //
    // var restroomValue = $("input:radio[name=restroom]:checked").val();
    // console.log(restroomValue);
    // if (restroomValue === "true") {
    //   trueFalseUserInputs.push(true);
    // } else if (restroomValue === "false") {
    //   trueFalseUserInputs.push(false);
    // } else {
    //   trueFalseUserInputs.push(false);
    //   preferredAmenities.push(restroomValue);
    // }
    //


    console.log(trueFalseUserInputs);
    console.log(preferredAmenities);
    // .each(function() {
    //   userInputs.push($(this).val());
    // });

    // console.log(userInputs);
  });
});
