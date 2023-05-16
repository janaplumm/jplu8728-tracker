function buttonClick() {
  // Add your button click functionality here
  alert("Button clicked!");
}

// Star rating functionality
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-rating");
    document.querySelector('[name="rating"]').value = rating;
    stars.forEach((s) => {
      if (s.getAttribute("data-rating") <= rating) {
        s.innerHTML = "&#11088;";
      } else {
        s.innerHTML = "&#9734;";
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