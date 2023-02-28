// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

// Current Day
var today = dayjs();
$('currentDay').text(today.format('MMM D, YYYY'));
// How do I get this to display???
function display() {
  document.textContent = "currentDay";
}



$(function () {


  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 

  // HINT: What does `this` reference in the click listener function? 

  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 

  // How might the id be useful when saving the description in local storage?


//get all save buttons
var saveBtnEl=$(".saveBtn")

//when we click any save button...
saveBtnEl.on("click",
  function () {
    //get the text typed in this block
    //which button got clicked? (event.target???)
    //find the input next to this button (it's a ~sibling~, another child of its parent...)
    //store that input's value in local storage

    localStorage.setItem("userInput");
  }
);

  var button = document.querySelector(".userInput");

  function userInput(event) {
    console.log("save");
    var buttonClicked = $(event.target);
    buttonClicked.parent().remove();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log()
  }


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 

  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?

  // How can Day.js be used to get the current hour in 24-hour time?

// var past = 
// var present = 
// var future = 


  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding text area elements. 

  // HINT: How can the id attribute of each time-block be used to do this?





  // TODO: Add code to display the current date in the header of the page.
});










// Fetch API to get current day/time
// fetch("http://worldtimeapi.org/api/timezone/America/New_York")
//   .then(function (response) {
//     return response.json(); //What is JSON doing here? Am I controlling it? Where?
//   })
//   .then(function (data) {
//     console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       console.log(data[i].datetime);
//     }
//   });