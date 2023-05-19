// BUTTON CLICK FUNCTIONS

function buttonClick() {
  // Add your button click functionality here
  alert("Button clicked!");
}

// OPEN AND CLOSE ADD-EPISODE-POPUP FUNCTIONS

// Used the code from https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson5.html as base for the code below

function openEpisodePopup() {
  // get the add-podcast-popup window via ID
  const addEpisodePopup = document.getElementById("add-podcast-popup");

  // get the current value of the add-podcast-popup window display in CSS
  const displayEpisodeSetting = addEpisodePopup.style.display;

  // check if add-podcast-popup is hidden
  if (displayEpisodeSetting == "none") {
    // show add-podcast-popup
    addEpisodePopup.style.display = "block";
  } else {
    // add-podcast-popup is visible, leave as is
    addEpisodePopup.style.display = "block";
  }

  // test functionality with console
  //console.log(openEpisodePopup)
}

function closeEpisodePopup() {
  // get the close button image element
  const closeEpisodeButton = document.getElementById("close-episode-popup");

  // get the add-podcast-popup window via ID
  const addEpisodePopup = document.getElementById("add-podcast-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  closeEpisodeButton.addEventListener("click", function () {
    addEpisodePopup.style.display = "none";
  });

  // test functionality with console
  //console.log(closeEpisodePopup)
}

// OPEN AND CLOSE SHOW-DETAILS-POPUP FUNCTIONS

function openDetailsPopup() {
  // get the show-details -popup window via ID
  const addDetailsPopup = document.getElementById("show-details-popup");

  // get the current value of the show-details-popup window display in CSS
  const displayDetailsSetting = addDetailsPopup.style.display;

  // check if show-details-popup is hidden
  if (displayDetailsSetting == "none") {
    // show show-details-popup
    addDetailsPopup.style.display = "block";
    //console.log("show details popup visible")
  } else {
    // show-details-popup is visible, leave as is
    addDetailsPopup.style.display = "block";
    //console.log("show details popup hidden")
  }

  // test functionality with console
  //console.log(openDetailsPopup)
}

function closeDetailsPopup() {
  // get the close button image element
  const closeDetailsButton = document.getElementById("close-details-popup");

  // get the show-details-popup window via ID
  const showDetailsPopup = document.getElementById("show-details-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  closeDetailsButton.addEventListener("click", function () {
    showDetailsPopup.style.display = "none";
  });

  // test functionality with console
  //console.log(closeDetailsPopup)
}

// INPUT FORM STAR RATING FEATURE

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

// INPUT FORM DROPDOWN MENU FEATURE

// This code sorts the genre list alphabetically to keep 'Investigative Journalism' in order

// Get the select element
var selectElement = document.getElementById("podcastGenre");

// Sort the options alphabetically
var options = Array.from(selectElement.options);
options.sort(function (a, b) {
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

// TASK LIST CODE FROM REPLIT

const form = document.getElementById("add-podcast-form");
const trackingList = document.getElementById("tracking-list");
// get the close button image element
const submitForm = document.getElementById("add-button");
let podcastList = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addEpisode(
    form.elements.podcastName.value,
    form.elements.postcastGenre.value,
    form.elements.podcastHosts.value,
    form.elements.episodeTitle.value,
    form.elements.episodeHours.value,
    form.elements.episodeMinutes.value,
    form.elements.episodeCompleted.value,
    form.elements.rating.value
  );
});

function displayEpisode(episode) {
  let item = document.createElement("li");
  item.setAttribute("data-id", episode.id);
  item.innerHTML = `<p><strong>${episode.name}<br>${episode.type}<br>${episode.rate}<br>${episode.time}<br>${episode.client}</strong></p>`;
  podcastList.appendChild(item);
  form.reset();
  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task
  // Listen for when the delete button is clicked
  delButton.addEventListener("click", function (event) {
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will delete the right element
    // Loop through the array and remove the element corresponding with the list item
    podcastList.forEach(function (taskArrayElement, taskArrayindex) {
      if (task.id == item.getAttribute("data-id")) {
        podcastList.splice(taskArrayindex, 1);
      }
    });
  });
}

function addEpisode(
  name,
  genre,
  hosts,
  title,
  hours,
  minutes,
  completed,
  rating
) {
  let episode = {
    name,
    genre,
    hosts,
    title,
    hours,
    minutes,
    completed,
    rating,
    id: Date.now(),
    date: new Date().toISOString(),
  };
  podcastList.push(episode);
  displayEpisode(episode);
}

console.log(addEpisode);
