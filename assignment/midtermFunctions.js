/* ================================
Week 6 Assignment: Midterm Function Signatures
================================ */

//Each Slide will have a filter, displaying only the relevant schools for that slide:
//In this slide, all of the schools with more than 100 violent incidents in a year are shown
var S1Filter = function(feature: object) { return: bool};
var S2Filter = function(feature: object) { return: bool};
var S3Filter = function(feature: object) { return: bool};
//one for each slide

//Every silde will have a style,
var S1Style = function(feature : object) { return: {CSSStyleObject: 'string'}};
var S2Style = function(feature : object) { return: {CSSStyleObject: 'string'}};
var S3Style = function(feature : object) { return: {CSSStyleObject: 'string'}};
//One for each slide

//This function adds the initial slide to map, and is called automatically
$(document).ready(function(Data: JSON, Filter: bool, Style: Object){});

//This function is just like the function above, but adds the slide called to the map
var changeSlideMap = function(Data: JSON, Filter: bool, Style: Object){});

//Transitions to slide  by hiding all slides, then showing slide of number "number"
var callSlide = function(number) {
  var slideID = "#slide" + string(number); //this is the slide ID in HTML
  $('.slide').hide();
  $(slideID).show();
  //Include code here to hide back button if "number" = 1, and hide next button if "number" = that of the last slide
};

//On Click of Button "next slide", this function pulls up the next slide
var nextSlide = function(){
  if ($('#slide1').is(":visible") === true) {
    //First the function calls up which slide is visible, if it's slide 1, go to slide 2
    //This line of code taken from stack overflow thread "Checking if an element is hidden"
    callSlide(2); //changes the slide text to Slide 2's text
    changeSlideMap(data, S2Filter, S2Style); //changes the slide's map to reflect slide 2
  }
  else if ($('#slide2').is(":visible") === true) {
    callSlide(3);
    changeSlideMap(data, S3Filter, S3Style);
  } else {} //final slide
}

//On click of button "previous", this function pulls up the previous slide
//THe same as the nextSlide Function, but in reverse!
var prevSlide = function(){
  if ($('#slide2').is(":visible") === true) { //if current slide is Slide2
    callSlide(1); //changes the slide text to Slide 1's text
    changeSlideMap(data, S1Filter, S1Style); //changes the slide's map to reflect slide 1
  }
  else if ($('#slide3').is(":visible") === true) {
    callSlide(2);
    changeSlideMap(data, S2Filter, S2Style);
  } else {} //final slide
}
