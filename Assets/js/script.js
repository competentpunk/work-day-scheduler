var saveBtnEl = $(".saveBtn")

// Wrap all code that interacts with the DOM in a call to jQuery to 
// ensure that the code isn't run until the browser has finished 
// rendering all the elements in the html.

// Current Day
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
function display() {
  document.textContent = "#currentDay";
}

  //when we click any save button...
  saveBtnEl.on("click",
    function () {
     var userInput = $(this).siblings(".description").val();
     var hour = $(this).parent().attr("id");
     console.log(hour);
      //get the text typed in this block
      //which button got clicked? (event.target???)
      //find the input next to this but(ton (it's a ~sibling~, another child of its parent...)
      //store that input's value in local storage
      // create an object that has two properties, userInput and hour ID
      //
    
      console.log(userInput);
      // alert($(this).val());
      // $( "html" ).parent()
      // localStorage.setItem("userInput");
    }
  );


// $(function () {


  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 

  // HINT: What does `this` reference in the click listener function? 

  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 

  // How might the id be useful when saving the description in local storage?


  //get all save buttons

  // function userInput(form) {
  //   if (localStorage.getitem(form) != pull) {
  //     console.log(form);
  //     var text = $('#text' + form).val();
  //     console.log(text);
  //     window.localStorage.setItem(form, text);
  //     console.log(localStorage.getItem(form));
  //     $('#button' + form).removeClass("fas fa-save");
  //     $('#button' + form).addClass("fas fa-save");
  //   }
  //   else{
  //     $("#button" + form).removeClass("fas fa-save");
  //     $("#button" + form).addClass("fas fa-save");
  //     $("#text" + form).val("")
  //     localStorage.removeItem
  //   }
  // }

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
// });










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