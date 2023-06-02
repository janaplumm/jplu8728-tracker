# Web App Prototype - Podfetch

## Introduction

Podfetch is a single-page **podcast tracking application** that helps people easily track their listening habits. Whether it's the classic comedy show, motivating self-help podcast or binge-worthy true crime series, Podfetch keeps them all in one place. 

With Podfetch, you can:

* **Add new episodes**
* **Delete any episodes**
* **View all added episodes**
* **See details of a specific episode**

The **desktop version** was created using the dimensions of **1512 x 775** and the **responsive mobile version** should be adjusted to **400 x 775** for optimal viewing experience. 

<br>

## Set Up

Podfetch works with a backend web server using **Node.js** and **Express**. The following steps need to be carried out before running Podfetch on your local machine. 

### <u>Steps</u>

##### 1. Clone the GitHub Repository
Use your terminal to clone the repository to your local machine
```HTML
git clone https://github.com/janaplumm/jplu8728-tracker.git
```
##### 2. Install Node.js
Download the Installer from the [Node.js Website](https://nodejs.org) and install Node.js and npm (Node Package Manager). Verify that the installation was successful. 
```HTML
node --version
```
##### 3. Install Dependencies
In the root directory of the cloned GitHub repository, install the Express framework. 
```HTML
npm install express
```
##### 4. Start the Server 
Start the web server using the script defined in the package.json file. 
```HTML
npm run start
```
##### 5. Open the Application 
Open your web browser and go to the localhost URL (port number may vary if port is taken). 
```HTML
http://localhost:8888
```

<br>

## From Design to Prototype

Podfetch pays homage to the **company Apple** using a minimalistic interface and typography. The term 'Podcast' was coined in 2004 by journalist Ben Hammersley, who combined the words 'iPod' and 'Broadcast' (Yaman, 2016). Taking inspiration from this, the focal point of the application is a **silver iPod classic**. The use of **Apple emoji imagery** links to the **millennial target group** and should encourage users to engage with the app and podcasts. 

### <u>Mockup Desktop: Overview</u>

The original mockup design for the desktop version consists of a **clean heading**, a **list containing tracked episode elements** and an **iPod** for main controls. Black and white minimalist colours are complemented with a splash of bright colours to lift the aesthethic and appeal to the target group. 

![Mockup Page 1](/docs/Desktop-Mockup-1.png)

### <u>Mockup Desktop: Add Episode Pop-up</u>

Used a **pop-up form with a one-column layout** for the user to add their podcast episode. Field **labels are positioned above the fields** so users can easily and quickly scan the form. **All fields are required except for the rating field**. This is notated with asterisks (*) and an alert message below the submission button.  

![Mockup Page 2](/docs/Desktop-Mockup-2.png)

### <u>Mockup Desktop: Show Episode Details Pop-up</u>

The second pop-up lets the user **view all the input data they entered when they added an episode**. This helps keep the information on display in the list container for each episode element minimal without overwhelming the user or the page. The user can select any episode, click 'Show Details' on the click wheel and view all other additional information. 

As well as being able to delete an item from the list container via the trash emoji image, the user can also **delete an episode via the delete button** in the pop-up.  

![Mockup Page 3](/docs/Desktop-Mockup-3.png)

### <u>Prototype Desktop: Overview </u>

The prototype desktop design closely resembles the mockup with a few minor changes: 

* **I swapped the iPod with the list container**, as it felt more logical when going from the desktop to mobile view. 
* After receiving feedback on the mockup design, **I removed the bright green colour (#EDFFB6)** and only used the light purple (#C8B6FF) as an accent. This makes the aesthethic look more consistent. 
* **Changed 'Add Podcast' to 'Add Episode'** on the iPod click wheel for clarity purposes.
* Made the **scrollbar** in the list container more **minimal with no arrows**.
* **Swapped the emoji image for 'History & Culture' genre** after doing user testing, as people felt the scroll was visually more interesting and relevant compared to the hut emoji. 

![Prototype Page 1](/docs/Desktop-Prototype-1.png)

### <u>Prototype Desktop: Add Episode Pop-up</u>

The prototype user input form has a few changes: 

* **Swapped the placeholder text from Serial podcast to Hamish & Andy**, because there are multiple hosts, which gives the user a better example of what to enter for the 'Podcast Host(s) input. 
* **Was unable to make the dropdown selection placeholder text grey** as in the mockup. However, this might be better for the user to understand it has a different function than typing. 
* **Changed the section of the 'Episode Duration'** to **include labels** on the side of the fields, as the use of the temporary text within the field alone is not user-friendly and asks the user to remember what they just read.  
* Also **shrunk the width of the 'Hours' and 'Minutes' fields** for consistency purposes. 
* **Made all fields required**, including rating section, after testing with users and finding that people want to rate the episode and don't see the point in tracking unrated episodes. 
* To maintain consistency with the updated minimal colour scheme, I **changed the colour of the 'Add Episode' submission button** from an aqua colour to the light green #EDFFB6 that used to be the background colour for the list container. This now **matches the colour of the 'Yes' button** for the 'Episode Completed' section. 
* Also **changed the height of the submission button** to match the 'Yes' and 'No' button height. 
* **'Yes' and 'No' buttons remain blank** and **only change colour to light green or light red when** the user has **selected** either button.  

![Prototype Page 2](/docs/Desktop-Prototype-2.png)

### <u>Prototype Desktop: Show Episode Details Pop-up</u>

The 'Show Details' pop-up prototype most closely resembles the original mockup designs. The **only changes made affected the delete button**, which matches the sizing of the submission button. I **added a confirmation alert for the delete function** so that the user has to confirm that they want to delete an episode to avoid accidental deletion.  

![Prototype Page 3](/docs/Desktop-Prototype-3.png)

### <u>Mockup Responsive Mobile</u>

The original mockup design for the mobile version **keeps the iPod as the focal point** of the page with the list container below using **a one-column layout**. The episode items within the list are changed to a **vertical layout** compared to in the horizontal desktop version. For the pop-ups, a **blurry background** appears to help the users focus on the pop-ups. 

<div>
  <img src="/docs/iPhone-Mockup-1.png" alt="Mobile mockup 1" width="250" height="auto">
  <img src="/docs/iPhone-Mockup-2.png" alt="Mobile mockup 2" width="250" height="auto">
  <img src="/docs/iPhone-Mockup-3.png" alt="Mobile mockup 3" width="250" height="auto">
</div>

### <u>Prototype Responsive Mobile</u>

The mobile prototype design is similar to the mockup with two main amendments: 

* The **episode items** within the list container are **larger than in the mockup**, which helps with **legibility**. 
* **Removed the blur background effect**, as it was difficult to implement, and also did not have the same effect when designing the mockups.

<div>
  <img src="/docs/iPhone-Prototype-1.png" alt="Mobile prototype 1" width="250" height="auto">
  <img src="/docs/iPhone-Prototype-2.png" alt="Mobile prototype 2" width="250" height="auto">
  <img src="/docs/iPhone-Prototype-3.png" alt="Mobile prototype 3" width="250" height="auto">
</div>

<br>

### <u>Code Reflections</u>

Podfetch is built using **HTML, CSS and JavaScript**. From the 'Introduction to Web Design' unit, **I had good fundamental HTML and CSS skills**, which I was able to apply on my own for this prototype. The **majority of the Javascript code is based on tutorial content** from this unit, particularly from the interactive task list code. For some additional functionality based on my designs, I sought out **coding examples from the internet** and **prompted ChatGPT** for specific coding assistance. 

<br>

### <u>HTML Reflections</u>

*The HTML code sits within ./public/index.html*

##### Class and ID Attributes 

Due to working with JavaScript, I learned that I can **add both class and ID attributes to a single HTML element**. The close button is featured on both pop-ups, so for CSS styling purposes I added a class attribute. For the JavaScript functionality, I used an ID attribute. 

```HTML
<img class="close-popup-button" id="close-episode-popup" 
src="./images/cancel-button.png" alt="Button with a cross to close pop-up window">
```

##### Additional Form Field Attributes

I also learned how to **incorporate additional attributes for the user input form**, including placeholder text, min and max values, and how to trigger a required prompt for the user to fill out all required form fields. 

```HTML
<input type="number" id="episodeMinutes" name="episodeMinutes" 
min="0" max="59" placeholder="41" required>
```

##### Avoid On-Click Attribute 

A lesson that cost me quite a bit of time was using the on-click attribute within my HTML code, which affected my existing JavaScript code once I added the 'type="module"' attribute to import images into the JavaScript file. After some testing with the console, I realised that the **issue was related to the scope of the JavaScript module** and **removed all on-click attributes**, which I replaced with event listeners. 

```HTML
 <!-- Link to the javascript file -->
<script type="module" src="./script.js"></script>
```

<br>

### <u>CSS Reflections</u>

*The CSS code sits within ./public/style.css*

---

##### CSS Flexbox and Transform 

After learning a lot of valuable lessons from 'Introduction to Web Design', I started creating the using **flexbox for the styling of the elements**, especially any container elements. It helped a lot with the **dynamic responsiveness** later on. For this project in particular, I worked a lot with the **transform property** to move elements around and keep them in place. I tried using positioning, however, felt that this was not as flexible in that regard.  

```CSS
/* Styling for iPod, moving it to the correct spot on the screen */
.iPod {
  display: flex;
  flex-direction: column;
  transform: translate(4rem, -20rem);
}
```
 
---

##### Limiting Line Length

While adding temporary episode items, I realised that some podcast and episode titles are rather long. So, I found this solution from a Stack Overflow discussion that used **Webkit to determine line length within the iPod display**.  

```CSS
/* Styling for text elements to prevent overflow within the container if character length exceeds width */
/* Used code from https://stackoverflow.com/questions/3922739/limit-text-length-to-n-lines-using-css/13924997#13924997 */
#iPod-display-podcast-title,
#iPod-display-episode-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* Limit text to 2 lines */
  -webkit-box-orient: vertical;
  text-align: center;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
}
```

---

##### Scrollbar Styling

As the list container is positioned within the page, I **enabeled scrolling and hid the overflow** so the user is able to add multiple episode items and scroll up and down to view them. In order to style the scrollbar, I made use of Webkit again by coming across a Code Pen that had multiple scrollbar stylings.   

```CSS
/* Used code from this Codepen to style scrollbar https://codepen.io/devstreak/pen/dMYgeO */
#podcast-list::-webkit-scrollbar {
  width: 1.25rem;
  background-color: #F5F5F5;
}

/* Scrollbar handle */
#podcast-list::-webkit-scrollbar-thumb {
  background: #D9D9D9;
}
```

<br>

### <u>JavaScript Reflections</u>

*The JavaScript code sits within ./public/script.js*

The below five JavaScript reflections are based on my prompts with ChatGPT for custom features that I have within Podfetch that extend beyond the scope of the tutorial content. 

---

##### iPod Shuffle Buttons 

The iPod mimics the iconic iPod classic, which includes the left and right shuffle buttons. I wanted the user to be able to click on any episode item within the list container, but also **use the left and right shuffle buttons to move through the list**. 

Initially, when I was testing the list items, they were being added in order from earliest to latest. **I wanted to reverse this so that the user always sees their latest tracking addition at the top of the list**. I made sure to incorporate this within the JavaScript code for the shuffle buttons and event listeners. 

The prompt reply from ChatGPT is featured in Figure 1. 

```JavaScript
// IPOD SHUFFLE LEFT AND RIGHT BUTTONS
// Received this code from prompting ChatGPT (see Figure 1)
// Lets user move through the list of elements as an additional functionality

// Define currentEpisode globally so it can be accessed by multiple functions
let currentEpisode;

function shuffleLeft() {
  // Retrieve the list of podcast episodes from the localStorage
  let localPodcasts = JSON.parse(localStorage.getItem("episodes"));

  // Check if the localPodcasts variable is not empty and if there are episodes on the left side of the current episode
  if (localPodcasts !== null && currentEpisode) {
    let currentIndex = localPodcasts.findIndex(
      (episode) => episode.id === currentEpisode.id
    );

    if (currentIndex > 0) {
      // Update the current episode with the previous episode
      currentEpisode = localPodcasts[currentIndex - 1];

      // Display the previous episode in the iPod display
      iPodDisplay(currentEpisode);
    }
  }
}

// Add event listeners to the shuffle buttons
// Reverse the order because array is in reverse
document
  .getElementById("left-shuffle-button")
  .addEventListener("click", shuffleRight);
document
  .getElementById("right-shuffle-button")
  .addEventListener("click", shuffleLeft);
```

<br>

###### Figure 1: ChatGPT prompt reply for iPod shuffle buttons


<img src="/docs/ChatGPT-1-Shuffle.jpeg" alt="Figure 1 - ChatGPT Shuffle Code" width="600" height="auto">

---

##### Date Format Conversion

In the 'Show Details' pop-up, the user is able to see whether they completed an episode or not. If they completed it, the user is also able to see the date that they completed it on. I used ChatGPT to help me **convert the date data collected from user input submission into a legible completion date** depending on if the user completed the episode or not. 

```JavaScript
// Function that determines the output message depending on user input for episode completed

function episodeGreenTick(episode) {
  let completeMessage;

  // Received this code to convert the date input from prompting ChatGPT (see Figure 2)
  const options = { day: "numeric", month: "long", year: "numeric" };
  const completionDate = new Date(episode.date).toLocaleDateString(
    undefined,
    options
  );

  if (episode.completed === true) {
    completeMessage = "Yes ✅ on " + completionDate;
  } else {
    completeMessage = "No";
  }

  return completeMessage;
}
```

<br>

###### Figure 2: ChatGPT prompt reply for date format conversion

<img src="/docs/ChatGPT-2-Date-Conversion.jpeg" alt="Figure 2 ChatGPT Date Conversion" width="600" height="auto">

---

##### Emoji Star Rating

One of the **biggest struggles with the input form was the star rating feature**. I wanted to work specifically with star emojis and not filled stars. After searching online, I decided to prompt ChatGPT for a possible solution that I could alter. ChatGPT provided the **skeleton structure for the HTML** (I made sure to remove the on-click attributes) and **JavaScript**. I added a **conditional statement** to also ensure deselection was properly noted within the rating value. 

```JavaScript
// INPUT FORM: STAR RATING FEATURE
// Received this code from prompting ChatGPT (see Figure 3)
// This code converts the user rating value from 1 - 5 into star emojis

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
```

<br>

###### Figure 3: ChatGPT prompt reply for star rating feature

<img src="/docs/ChatGPT-3-Star-Rating.jpeg" alt="Figure 3 ChatGPT Star Rating" width="600" height="auto">
<img src="/docs/ChatGPT-3-Star-Rating-2.jpeg" alt="Figure 3 ChatGPT Star Rating" width="600" height="auto">

---

##### Dropdown Menu Alphabetical Order 

I switched the placeholder text from the Serial podcast to Hamish & Andy. I noticed that the alphabetical order would get mixed up, because 'comedy' was the placeholder, but it was not the first genre element. Therefore, I prompted ChatGPT to help me **organise the genre elements in alphabetical order once the user clicks on the dropdown menu to make their selection**. 

```JavaScript
// INPUT FORM: DROPDOWN MENU FEATURE
// Received this code from prompting ChatGPT (see Figure 4)
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
```

<br>

###### Figure 4: ChatGPT prompt reply for alphabetically sorting dropdown menu

<img src="/docs/ChatGPT-4-Dropdown.jpeg" alt="Figure 4 ChatGPT Dropdown" width="600" height="auto">

---

##### Temporary Episode Item for New Users 

I consulted with my tutor about what a new user is supposed to see in the list given that they have not added any episodes yet. **My tutor advised that we should have a temporary episode item in the list** to give the user an example of what it looks like. ChatGPT helped me add the event listener to any window load events and then added in the conditional statement to check whether localStorage is empty and, if so, to display the temporary episode item. 

```JavaScript
// LOAD EXAMPLE EPISODE ELEMENT IF LOCALSTORAGE EMPTY
// Received this code from prompting ChatGPT (see Figure 5)

// If local storage is empty when the page loads, then call the function to display example podcast episode element
window.addEventListener("load", function () {
  let localEpisodes = JSON.parse(this.localStorage.getItem("episodes"));

  if (localEpisodes == null || localEpisodes.length === 0) {
    // Call the function to display example podcast episode element for anyone who loads the website for the first time
    addPodcastEpisode(
      "Serial",
      "investigative",
      "Sarah Koenig",
      "Serial S01 - Ep.1: The Alibi",
      1,
      36,
      true,
      4
    );
  }
});
```

<br>

###### Figure 5: ChatGPT prompt reply for temporary episode item loading

<img src="/docs/ChatGPT-5-Load.jpeg" alt="Figure 5 ChatGPT Load" width="600" height="auto">


<br>
<br>
<br>

## Future Improvements

There are several improvements that can be made to the application for a more accessible and enjoyable user experience:

* **Accessibility** - The current code only takes minimal accessibility into account, such as font legibility, colour contrast and button sizing. However, this can be improved with additional features like keyboard accessibility, screen readers and focus indicators. 
* **Animations** - There is some animation in terms of hover and transition effects, but this app can become more playful. When the user clicks on a pop-up, for instance,  this can have a more engaging transition. 
* **Responsiveness** - Current responsiveness is only tailored to desktop and mobile views and can be expanded to multiple views.
* **User Control** - The user can only add, view and delete episode items. In the future, this could be scaled up to include editorial control and being able to customise the app for a more personal user experience. 

<br>

## Closing Words 

Overall, creating this prototype website was a **very challenging, but also rewarding experience**. After inititally struggling with understanding JavaScript and DOM manipulation, **I now feel confident in my applying my knowledge and skills**. While I did not work with APIs or JS libraries for this project, I understand their purposes. Similarly, **I know more about setting up my own backend server than I did before**. The Scrimba recordings were an incredibly useful asset during this unit, and in hindsight, I would have used them more often in the beginning to get a faster grip on the fundamentals. I also learned some valuable lessons in how to prompt ChatGPT to help speed my up my coding learning process. It was also a very useful tool in explaining complex concepts. Before this unit, I was not confident in my abilities to code my own portfolio. I did not know how to work with GitHub or VS Code. **Moving forward, I want to experiment more with JavaScript and Web Design in my own time and work on a portfolio that I can host using GitHub**. 

<br>

## References

Answer to „Limit text length to n lines using CSS“. (2012, December 18). Retrieved 2 June 2023, from Stack Overflow website: https://stackoverflow.com/a/13924997

Custom Scrollbar styling. (o. J.). Retrieved 2 June 2023, from CodePen website: https://codepen.io/devstreak/details/dMYgeO

Yaman, İ. (2016). The Potential Benefits of Podcasts for Language Learning. Journal of Educational and Instructional Studies, 6(1), 60–66.