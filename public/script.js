// IMPORT IMAGES
// Used Rob's code from https://github.com/robdongas/deco2017-task-tracker/commit/b070dc4ff3d621b124326d04366782299a4961c8

import images from "./images/*.png";
// console.log(images);

// FORM SUBMISSION HANDLING
// Used this from unit content Scrimba JS Objects - Input and event handling

// Create variables that use HTML elements
const form = document.getElementById("add-podcast-form");
const formlist = document.querySelector("#podcast-list");

// Event Listener to listen for form submission
form.addEventListener("submit", function (event) {
  // Block the default submission behaviour
  event.preventDefault();

  // Check that episode completed buttons have been clicked otherwise alert user
  if (episodeCompleted === null) {
    alert("Please select whether you completed the episode.");
    return; // Prevent further execution of the submission logic
  }

  // Once form is successfully submitted, this data is added to the addPodcastEpisode function, which contains this new object
  addPodcastEpisode(
    form.elements.podcastName.value,
    form.elements.postcastGenre.value,
    form.elements.podcastHosts.value,
    form.elements.episodeTitle.value,
    form.elements.episodeHours.value,
    form.elements.episodeMinutes.value,
    form.elements.episodeCompleted.value,
    form.elements.rating.value
  );

  // Reset the form once it is submitted
  form.reset();

  // Reset episode completed button
  episodeCompleted = null;
  const episodeCompletedInput = document.getElementById(
    "episodeCompletedInput"
  );
  episodeCompletedInput.value = "";

  const yesButton = document.getElementById("episodeCompletedTrue");
  const noButton = document.getElementById("episodeCompletedFalse");
  yesButton.style.backgroundColor = "";
  noButton.style.backgroundColor = "";

  // Reset star rating
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.querySelector('[name="rating"]');
  ratingInput.value = "0";
  stars.forEach((star) => {
    star.innerHTML = "&#9734;"; // Unicode representing empty star
  });

  console.log(podcastList);
});

// EPISODE ITEM DISPLAY
// Function that displays the Episode Item(s) in the Podcast List

function displayPodcastEpisode(episode) {
  // Create variable that links to HTML list element
  let episodeItem = document.createElement("li");
  episodeItem.className = "podcast-list-item-container";

  // Create the inner HTML structure for the episode item
  episodeItem.innerHTML = `
    <div class="podcast-list-item-details">
      <img class="podcast-list-item-genre-img" src=images["comedy-emoji"] alt="Investigative journalist emoji">
      <div class="podcast-list-item-info">
        <div class="podcast-list-item-heading">
          <h3 class="podcast-title">${episode.name}</h3>
          <img class="green-tick-complete" img src='${images['green-tick-emoji']}' alt="Green tick emoji indicating completion">
        </div>
        <p class="episode-title">${episode.title}</p>
        <div class="episode-rating">${generateStarRating(episode.rating)}</div>
      </div>
    </div>
    <div class="podcast-list-item-del">
      <img id="trash-icon-button" img src='${images['trash-emoji']}' alt="Trash emoji representing delete functionality">
    </div>
  `;

  // Append the episode item to the podcast list
  let podcastList = document.querySelector("#podcast-list");
  podcastList.appendChild(episodeItem);
}

// Function to generate star rating HTML based on the given rating
function generateStarRating(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  return stars;
}

// PODCAST ARRAY & OBJECT CREATION

// Create an array that holds all the podcast items
const podcastList = [];

// Function contains the object that is going to be added to the array with each form submission
function addPodcastEpisode(
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

  // Add object to the array
  podcastList.push(episode);
  // Call the displayPodcastEpisode function in order for this to be visual on the HTML page
  displayPodcastEpisode(episode);
}

// POP-UPS: OPEN AND CLOSE ADD-EPISODE-POPUP FUNCTIONS
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

document.getElementById("add-episode-button").addEventListener("click", openEpisodePopup);

function closeEpisodePopup() {
  // get the add-podcast-popup window via ID
  const addEpisodePopup = document.getElementById("add-podcast-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  addEpisodePopup.style.display = "none";

  // test functionality with console
  //console.log(closeEpisodePopup)
}

document.getElementById("close-episode-popup").addEventListener("click", closeEpisodePopup);

// POP-UPS: OPEN AND CLOSE SHOW-DETAILS-POPUP FUNCTIONS

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

document.getElementById("show-details-button").addEventListener("click", openDetailsPopup);

function closeDetailsPopup() {
  // get the show-details-popup window via ID
  const showDetailsPopup = document.getElementById("show-details-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  showDetailsPopup.style.display = "none";

  // test functionality with console
  //console.log(closeDetailsPopup)
}

document.getElementById("close-details-popup").addEventListener("click", closeDetailsPopup);

// INPUT FORM: STAR RATING FEATURE

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

// INPUT FORM: DROPDOWN MENU FEATURE
// This code sorts the genre list alphabetically to keep 'Comedy' in order

// Get the select element
const selectElement = document.getElementById("podcastGenre");

// Sort the options alphabetically
const options = Array.from(selectElement.options);
options.sort(function (a, b) {
  return a.text.localeCompare(b.text);
});

// Get the selected value
const selectedValue = selectElement.value;

// Clear the select element
selectElement.innerHTML = "";

// Insert the sorted options back into the select element
for (let i = 0; i < options.length; i++) {
  selectElement.appendChild(options[i]);
}

// Set the selected value
selectElement.value = selectedValue;

// INPUT FORM: EPISODE COMPLETED BUTTONS (TRUE OR FALSE BOOLEAN VALUE)
// This is a required section of the user input form (see next function submitForm)

// Create a global variable to store user selected value
let episodeCompleted = null;

// Use a function to store user selected value if user clicks on 'yes' or 'no' button
function episodeCompletedButton(value) {
  episodeCompleted = value === true;
  // console.log(episodeCompleted); // Log boolean value to console to check it works

  // Apply value of episode completed button to hidden input element
  const episodeCompletedInput = document.getElementById(
    "episodeCompletedInput"
  );
  episodeCompletedInput.value = episodeCompleted ? "true" : "false";

  // store button values in separate variables
  const yesButton = document.getElementById("episodeCompletedTrue");
  const noButton = document.getElementById("episodeCompletedFalse");

  // Apply visual indicator for user to see their button selection
  if (episodeCompleted) {
    // User selected 'yes'
    yesButton.style.backgroundColor = "#EDFFB6"; // Change color of 'yes' button
    noButton.style.backgroundColor = ""; // Revert color of 'no' button
  } else {
    // User selected 'no'
    yesButton.style.backgroundColor = ""; // Revert color of 'yes' button
    noButton.style.backgroundColor = "#FFB6C8"; // Change color of 'no' button
  }
}

// Event listeners applied to get triggered by 'yes' or 'no' button clicks
const yesButton = document.getElementById("episodeCompletedTrue");
const noButton = document.getElementById("episodeCompletedFalse");

yesButton.addEventListener("click", function() {
  episodeCompletedButton(true);
});

noButton.addEventListener("click", function() {
  episodeCompletedButton(false);
});