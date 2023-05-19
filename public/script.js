function buttonClick() {
  // Add your button click functionality here
  alert("Button clicked!");
}

// Used the code from https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson5.html as base for the code below

function addEpisode() {
  // get the add-podcast-popup window via ID
  const addEpisodePopup = document.getElementById("add-podcast-popup");

  // get the current value of the add-podcast-popup window display in CSS
  const displaySetting = addEpisodePopup.style.display;

  // check if add-podcast-popup is hidden 
  if (displaySetting == "none") {
    // show add-podcast-popup
    addEpisodePopup.style.display = "block";
  }
  else {
    // add-podcast-popup is visible, leave as is
    addEpisodePopup.style.display = "block";
  }

  // test functionality with console 
  //console.log(addEpisodePopup)
}

function closePopup() {
  // get the close button image element 
  const closePopupButton = document.getElementById("close-popup-button");

  // get the add-podcast-popup window via ID
  const addEpisodePopup = document.getElementById("add-podcast-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  closePopupButton.addEventListener("click", function() {
    addEpisodePopup.style.display = "none";
  })

  // test functionality with console 
  //console.log(closePopup)
}

// Star rating functionality

// Select and store all 'star' class name elements
const stars = document.querySelectorAll(".star");
// Select and store selected rating value 
const ratingInput = document.querySelector('[name="rating"]');

// Loop over each star element 
stars.forEach((star) => {
  // Event listener listens out for any user clicks
  star.addEventListener("click", () => {
    // When user clicks on a star, this value is selected and stored
    const rating = star.getAttribute("data-rating");
    const currentRating = ratingInput.value;

    // Check for deselection of stars by the user to maintain correct value
    if (currentRating === rating) {
      // Deselect the current rating
      ratingInput.value = "0";
    } else {
      // Select the clicked star
      ratingInput.value = rating;
    }

    // Iterate over star elements 
    stars.forEach((s) => {
      // Check if data-rating is less than or equal to updated ratingInput value
      if (s.getAttribute("data-rating") <= ratingInput.value) {
        s.innerHTML = "&#11088;"; // Unicode representing filled emoji star
      } else {
        s.innerHTML = "&#9734;"; // Unicode representing empty star
      }
    });
    // console.log("Selected rating:", ratingInput.value);
  });
});


// This code sorts the genre list alphabetically to keep 'Investigative Journalism' in order

// Get the select element
var selectElement = document.getElementById("podcastGenre");

// Sort the options alphabetically
var options = Array.from(selectElement.options);
options.sort(function(a, b) {
  return a.text.localeCompare(b.text);
});

// Get the selected value
var selectedValue = selectElement.value;

// Clear the select element
selectElement.innerHTML = "";

// Insert the sorted options back into the select element
for (var i = 0; i < options.length; i++) {
  selectElement.appendChild(options[i]);
}

// Set the selected value
selectElement.value = selectedValue;