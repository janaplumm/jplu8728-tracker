// IMPORT IMAGES
// Modified Rob's code from https://github.com/robdongas/deco2017-task-tracker/blob/b070dc4ff3d621b124326d04366782299a4961c8/public/script.js

import images from "./images/*.png";
//console.log(images);

// FORM SUBMISSION HANDLING
// Used this from unit content Scrimba JS Objects - Input and event handling

// Create variables that use HTML elements
const form = document.getElementById("add-podcast-form");
const podcastlist = document.querySelector("#podcast-list");

// Event Listener to listen for form submission
form.addEventListener("submit", function (event) {
  // Block the default submission behaviour to handle submission manually
  event.preventDefault();

  // Check that episode completed buttons have been clicked otherwise alert user
  if (episodeCompleted === null) {
    alert("Please select whether you completed the episode.");
    return; // Prevent further execution of the submission logic
  }

  // Since episode completion is determined by buttons, this value needs to be assigned to a new variable, which is then added into the object creation
  const completed = episodeCompleted;

  // Once form is successfully submitted, this data is added to the addPodcastEpisode function, which contains this new object
  addPodcastEpisode(
    form.elements.podcastName.value,
    form.elements.postcastGenre.value,
    form.elements.podcastHosts.value,
    form.elements.episodeTitle.value,
    form.elements.episodeHours.value,
    form.elements.episodeMinutes.value,
    completed,
    form.elements.rating.value
  );

  //console.log(addPodcastEpisode);

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
});

// GENRE IMAGE SELECTION
// Modified Rob's code from https://github.com/robdongas/deco2017-task-tracker/blob/b070dc4ff3d621b124326d04366782299a4961c8/public/script.js

function genreImage(genre) {
  // Create a variable that is returned at the end
  let genreImage = { src: null, alt: null };

  // Set the genre image source based on the genre category using switch case
  switch (genre) {
    case "advice":
      genreImage.src = images["advice-emoji"];
      genreImage.alt = "Emoji of person holding up arm for help";
      break;
    case "arts":
      genreImage.src = images["arts-emoji"];
      genreImage.alt = "Emoji of theatre masks";
      break;
    case "business":
      genreImage.src = images["business-emoji"];
      genreImage.alt = "Emoji of face with dollar signs for eyes";
      break;
    case "comedy":
      genreImage.src = images["comedy-emoji"];
      genreImage.alt = "Emoji of face crying tears laughing";
      break;
    case "educational":
      genreImage.src = images["education-emoji"];
      genreImage.alt = "Emoji of books stacked on top of each other";
      break;
    case "health":
      genreImage.src = images["health-emoji"];
      genreImage.alt = "Emoji of green apple";
      break;
    case "history":
      genreImage.src = images["history-emoji"];
      genreImage.alt = "Emoji of an ancient human hut";
      break;
    case "investigative":
      genreImage.src = images["journalism-emoji"];
      genreImage.alt = "Emoji of detective person";
      break;
    case "news":
      genreImage.src = images["news-emoji"];
      genreImage.alt = "Emoji of world globe";
      break;
    case "popculture":
      genreImage.src = images["pop-culture-emoji"];
      genreImage.alt = "Emoji of popcorn box";
      break;
    case "science":
      genreImage.src = images["science-emoji"];
      genreImage.alt = "Emoji of DNA strand";
      break;
    case "technology":
      genreImage.src = images["technology-emoji"];
      genreImage.alt = "Emoji of robot face";
      break;
    case "truecrime":
      genreImage.src = images["crime-emoji"];
      genreImage.alt = "Emoji of skull";
      break;
  }

  // Return the variable to use in other functions
  return genreImage;
}

// EPISODE ITEM DISPLAY
// Modified Rob's code from https://github.com/robdongas/deco2017-task-tracker/blob/b070dc4ff3d621b124326d04366782299a4961c8/public/script.js
// Function that fetches and displays the Episode Item(s) in the Podcast List from localStorage

function displayPodcasts() {
  // Clear the list
  podcastlist.innerHTML = "";

  // Fetch episode element from localStorage using same variable name as in addPodcastEpisode (these do not clash due to scope)
  let localPodcasts = JSON.parse(localStorage.getItem("episodes"));

  // Check if element is not empty and if not execute the code within to create new list item
  if (localPodcasts !== null) {
    // Loop through the array to check each element within
    localPodcasts.forEach((episode) => {
      // Create new list item and populate with content
      let episodeItem = document.createElement("li");
      episodeItem.className = "podcast-list-item-container";
      // Data attribute for ID
      episodeItem.setAttribute("data-id", episode.id);

      let genreImg = genreImage(episode.genre);

      // Create the inner HTML structure for the episode item
      episodeItem.innerHTML = `
        <div class="podcast-list-item-details">
          <img id="podcast-list-item-genre-img" src='${genreImg.src}' alt='${
        genreImg.alt
      }'>
          <div class="podcast-list-item-info">
            <h3 id="podcast-list-title">${episode.name} ${greenTick(
        episode.completed
      )}</h3>
            <p id="episode-list-title">${episode.title}</p>
            <div id="episode-list-rating">${ratingMessage(episode.rating)}</div>
          </div>
        </div>
        <div class="podcast-list-item-del">
          <img class="trash-icon-button" img src='${
            images["trash-emoji"]
          }' alt="Trash emoji representing delete functionality">
        </div>
      `;

      // Append the episode item to the podcast list
      podcastlist.appendChild(episodeItem);

      // When user clicks on an episode item, this is displayed in the iPod display 
      episodeItem.addEventListener("click", function () {
        // Call iPodDisplay function to display specific episode 
        iPodDisplay(episode);
      });

      // Assign class trash icon emoji as delete button
      let delButton = episodeItem.querySelector(".trash-icon-button");

      // Create event listener that listens out for any click events on this button
      delButton.addEventListener("click", function () {
        // Show confirmation dialog to prevent user from accidentally deleting
        const confirmDelete = confirm(
          "Are you sure you want to delete this episode?"
        );

        // Once confirmed, loop through all podcast items to find matching ID and remove it from the array
        if (confirmDelete) {
          localPodcasts.forEach(function (
            episodeArrayElement,
            episodeArrayIndex
          ) {
            if (episodeArrayElement.id == episodeItem.getAttribute("data-id")) {
              localPodcasts.splice(episodeArrayIndex, 1);
            }
          }); // Closing bracket for delete loop statement

          // Update localStorage with the newly spliced array (converted to a JSON string)
          localStorage.setItem("episodes", JSON.stringify(localPodcasts));

          // Remove the episode item from the page
          episodeItem.remove();
        } // Closing bracket for confirm delete if statement
      }); // Closing bracket for delete event listener
    }); // Closing bracket for local podcasts loop statement
  } // Closing bracket for local podcasts if statement

  // Automatically show the first item in the array within the iPod Display when page loads
  iPodDisplay(localPodcasts[0]);
}

// Function to generate star rating HTML based on the given rating
function ratingMessage(rating) {
  // Create empty message variable
  let ratingMessage = "";

  // Check if rating is equal to 0 and otherwise assign stars to rating value
  if (rating == 0) {
    ratingMessage = "No rating";
  } else {
    for (let i = 0; i < rating; i++) {
      ratingMessage += "⭐";
    }
  }

  // Output message
  return ratingMessage;
}

// Function to generate green tick emoji if user completed episode
function greenTick(completed) {
  if (completed) {
    return "&#x2705;"; // Green tick emoji unicode
  } else {
    return ""; // Empty string
  }
}

// Calling the displayPodcasts function when the user loads the HTML page in order for their local storage data to appear instantly
window.addEventListener("load", displayPodcasts);

// IPOD DISPLAY
// Used similar structure of displayPodcast function 

function iPodDisplay(episode) {
  // Create a new variable that links to the HTML iPod display 
  let displayItem = document.querySelector(".iPod-display");

  // Get images via the genreImage function
  let genreImg = genreImage(episode.genre);

  // Similar to displayPodcast function, manipulate DOM elements using innerHTML property 
  displayItem.innerHTML = `
    <img class="iPod-display-genre-img" src="${genreImg.src}" alt="${genreImg.alt}">
    <div class="iPod-display-details">
      <h3 id="iPod-display-podcast-title">${episode.name} ${greenTick(episode.completed)}</h3>
      <p id="iPod-display-episode-title">${episode.title}</p>
      <div id="iPod-display-rating">${ratingMessage(episode.rating)}</div>
    </div>
  `;

  // To make it obvious which list item is selected, CSS active will be used 

  // Remove the "active" class from all episode items in the list 
  let episodeItems = document.querySelectorAll(".podcast-list-item-container");
  episodeItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add the "active" class to the episode item in the iPod display
  let currentEpisodeItem = document.querySelector(`[data-id="${episode.id}"]`);
  if (currentEpisodeItem) {
    currentEpisodeItem.classList.add("active");
  }
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

document
  .getElementById("add-episode-button")
  .addEventListener("click", openEpisodePopup);

function closeEpisodePopup() {
  // get the add-podcast-popup window via ID
  const addEpisodePopup = document.getElementById("add-podcast-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  addEpisodePopup.style.display = "none";

  // test functionality with console
  //console.log(closeEpisodePopup)
}

document
  .getElementById("close-episode-popup")
  .addEventListener("click", closeEpisodePopup);

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

document
  .getElementById("show-details-button")
  .addEventListener("click", openDetailsPopup);

function closeDetailsPopup() {
  // get the show-details-popup window via ID
  const showDetailsPopup = document.getElementById("show-details-popup");

  // add event listener that listens for user clicks and hides the pop-up window
  showDetailsPopup.style.display = "none";

  // test functionality with console
  //console.log(closeDetailsPopup)
}

document
  .getElementById("close-details-popup")
  .addEventListener("click", closeDetailsPopup);

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

// Global variable for episodeCompleted

let episodeCompleted = null;

// Global variables for yes and no buttons
const yesButton = document.getElementById("episodeCompletedTrue");
const noButton = document.getElementById("episodeCompletedFalse");

// Use a function to store user selected value if user clicks on 'yes' or 'no' button (and style buttons)
function episodeCompletedButton(value) {
  // Assign variable the value
  episodeCompleted = value;
  // Log boolean value to console to check it works
  console.log(episodeCompleted);
  console.log(typeof episodeCompleted);

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
yesButton.addEventListener("click", function () {
  episodeCompletedButton(true);
});

noButton.addEventListener("click", function () {
  episodeCompletedButton(false);
});

// PODCAST ARRAY & OBJECT CREATION
// Modified Rob's code from https://github.com/robdongas/deco2017-task-tracker/blob/b070dc4ff3d621b124326d04366782299a4961c8/public/script.js

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

  // Fetch and parse podcast array from localStorage
  let localPodcasts = JSON.parse(localStorage.getItem("episodes"));

  // Conditional statement to check if localStorage is empty or contains elements
  if (localPodcasts == null) {
    localPodcasts = [episode];
  } else {
    // Check existing podcast episode(s)
    // If existing element found matches the ID, then log out error message
    if (localPodcasts.find((element) => element.id === episode)) {
      console.log("Episode ID already exists.");
      // Else add element to local episodes array
    } else {
      localPodcasts.push(episode);
    }
  }

  // Set new item in localStorage object and convert value within array to string
  localStorage.setItem("episodes", JSON.stringify(localPodcasts));

  // Call the function that visibly displays multiple podcast episode elements
  displayPodcasts();
}
