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

![Mockup Landing page](/docs/Desktop-Mockup-1.png)

### <u>Mockup Desktop: Add Episode Pop-up</u>

Used a **pop-up form with a one-column layout** for the user to add their podcast episode. Field **labels are positioned above the fields** so users can easily and quickly scan the form. **All fields are required except for the rating field**. This is notated with asterisks (*) and an alert message below the submission button.  

![Mockup Landing page](/docs/Desktop-Mockup-2.png)

### <u>Mockup Desktop: Show Episode Details Pop-up</u>

The second pop-up lets the user **view all the input data they entered when they added an episode**. This helps keep the information on display in the list container for each episode element minimal without overwhelming the user or the page. The user can select any episode, click 'Show Details' on the click wheel and view all other additional information. 

As well as being able to delete an item from the list container via the trash emoji image, the user can also **delete an episode via the delete button** in the pop-up.  

![Mockup Landing page](/docs/Desktop-Mockup-3.png)

### <u>Prototype Desktop: Overview </u>

The prototype desktop design closely resembles the mockup with a few minor changes: 

* **I swapped the iPod with the list container**, as it felt more logical when going from the desktop to mobile view. 
* After receiving feedback on the mockup design, **I removed the bright green colour (#EDFFB6)** and only used the light purple (#C8B6FF) as an accent. This makes the aesthethic look more consistent. 
* **Changed 'Add Podcast' to 'Add Episode'** on the iPod click wheel for clarity purposes.
* Made the **scrollbar** in the list container more **minimal with no arrows**.
* **Swapped the emoji image for 'History & Culture' genre** after doing user testing, as people felt the scroll was visually more interesting and relevant compared to the hut emoji. 

![Prototype Landing page](/docs/Desktop-Prototype-1.png)

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

![Prototype Landing page](/docs/Desktop-Prototype-2.png)

### <u>Prototype Desktop: Show Episode Details Pop-up</u>

The 'Show Details' pop-up prototype most closely resembles the original mockup designs. The **only changes made affected the delete button**, which matches the sizing of the submission button. I **added a confirmation alert for the delete function** so that the user has to confirm that they want to delete an episode to avoid accidental deletion.  

![Prototype Landing page](/docs/Desktop-Prototype-3.png)

### <u>Mockup Responsive Mobile</u>

The original mockup design for the mobile version **keeps the iPod as the focal point** of the page with the list container below using **a one-column layout**. The episode items within the list are changed to a **vertical layout** compared to in the horizontal desktop version. For the pop-ups, a **blurry background** appears to help the users focus on the pop-ups. 

<div>
  <img src="/docs/iPhone-Mockup-1.png" alt="Overview mobile mockup" width="250" height="auto">
  <img src="/docs/iPhone-Mockup-2.png" alt="Overview mobile mockup" width="250" height="auto">
  <img src="/docs/iPhone-Mockup-3.png" alt="Overview mobile mockup" width="250" height="auto">
</div>

### <u>Prototype Responsive Mobile</u>

The mobile prototype design is similar to the mockup with two main amendments: 

* The **episode items** within the list container are **larger than in the mockup**, which helps with **legibility**. 
* **Removed the blur background effect**, as it was difficult to implement, and also did not have the same effect when designing the mockups.

<div>
  <img src="/docs/iPhone-Prototype-1.png" alt="Overview mobile mockup" width="250" height="auto">
  <img src="/docs/iPhone-Prototype-2.png" alt="Overview mobile mockup" width="250" height="auto">
  <img src="/docs/iPhone-Prototype-3.png" alt="Overview mobile mockup" width="250" height="auto">
</div>

<br>

#### <u>Code Reflections</u>

Podfetch is built using **HTML, CSS and JavaScript**. From the 'Introduction to Web Design' unit, **I had good fundamental HTML and CSS skills**, which I was able to apply on my own for this prototype. The **majority of the Javascript code is based on tutorial content** from this unit, particularly from the interactive task list code. For some additional functionality based on my designs, I sought out **coding examples from the internet** and **prompted ChatGPT** for specific coding assistance. 

#### <u>HTML Reflections</u>

The HTML code sits within ./public/index.html

##### Class and ID Attributes 

Due to working with JavaScript, I learned that I can add both class and ID attributes to a single HTML element. The close button is featured on both pop-ups, so for CSS styling purposes I added a class attribute. For the JavaScript functionality, I used an ID attribute. 

```HTML
<img class="close-popup-button" id="close-episode-popup" 
src="./images/cancel-button.png" alt="Button with a cross to close pop-up window">
```

##### Additional Form Field Attributes

I also learned how to incorporate additional attributes for the user input form, including placeholder text, min and max values, and how to trigger a required prompt for the user to fill out all required form fields. 

```HTML
<input type="number" id="episodeMinutes" name="episodeMinutes" 
min="0" max="59" placeholder="41" required>
```

#### <u>CSS Reflections</u>

The CSS code sits within ./public/style.css

#### <u>JavaScript Reflections</u>

The JavaScript code sits within ./public/script.js

* Text 1
* Text 2
* Text 3 

```HTML
<a class="skip-main" href="#main"><h3>Skip to main content</h3></a>
```
```CSS
/* this hides the skip to main content link and only reveals it when it detects the tab key being used for accessibility purposes */
a.skip-main {
  position: fixed;
  top: 0;
  transform: translate(100%, -100%);
}

a.skip-main:focus {
  /* transition will add a subtle animation when this link becomes active or focused */
  transition: transform 0.4s;
  transform: translate(100%, 120%);
}
```

<br>

## Closing Words 

Overall, creating this prototype website was a **very challenging, but also rewarding experience**. After inititally struggling with understanding JavaScript and DOM manipulation, **I now feel confident in my applying my knowledge and skills**. While I did not work with APIs or JS libraries for this project, I understand their purposes. Similarly, **I know more about setting up my own backend server than I did before**. The Scrimba recordings were an incredibly useful asset during this unit, and in hindsight, I would have used them more often in the beginning to get a faster grip on the fundamentals. Before this unit, I was not confident in my abilities to code my own portfolio. I did not know how to work with GitHub or VS Code. **Moving forward, I want to experiment more with JavaScript and Web Design in my own time and work on a portfolio that I can host using GitHub**. 

<br>

## References

Yaman, İ. (2016). The Potential Benefits of Podcasts for Language Learning. Journal of Educational and Instructional Studies, 6(1), 60–66.