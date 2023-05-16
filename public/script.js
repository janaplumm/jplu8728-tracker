function buttonClick() {
  // Add your button click functionality here
  alert("Button clicked!");
}

// Star rating functionality

// Select and store all elements with class name 'star'
const stars = document.querySelectorAll(".star");
// Iterate over each star element
stars.forEach((star) => {
  // Event listener executes code below once clicked by user
  star.addEventListener("click", () => {
    // Store the value of the data-rating attribute from clicked star element
    const rating = star.getAttribute("data-rating");
    // Update hidden input field value with selected user rating 
    document.querySelector('[name="rating"]').value = rating;
    // Update visual appearance of stars depending on if empty or filled
    stars.forEach((s) => {
      if (s.getAttribute("data-rating") <= rating) {
        s.innerHTML = "&#11088;"; // Unicode for solid emoji star symbol
      } else {
        s.innerHTML = "&#9734;"; // Unicode for empty star symbol
      }
    });
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