function buttonClick() {
  // Add your button click functionality here
  alert("Button clicked!");
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
    console.log("Selected rating:", ratingInput.value);
  });
});


// This code sorts the genre list alphabetically to keep 'Investigative Journalism' in order

// Get the select element
var selectElement = document.getElementById("genre");

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