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

The prototype desktop design closely resembles the mockup with a few minor changes. 

* **I swapped the iPod with the list container**, as it felt more logical when going from the desktop to mobile view. 
* After receiving feedback on the mockup design, **I removed the bright green colour (#EDFFB6)** and only used the light purple (#C8B6FF) as an accent. This makes the aesthethic look more consistent. 
* **Changed 'Add Podcast' to 'Add Episode'** on the iPod click wheel for clarity purposes.
* Made the **scrollbar** in the list container more **minimal with no arrows**.

![Prototype Landing page](/docs/Desktop-Prototype-1.png)

### <u>Prototype Desktop: Add Episode Pop-up</u>

Summary

![Prototype Landing page](/docs/Desktop-Prototype-2.png)

### <u>Prototype Desktop: Show Episode Details Pop-up</u>

Summary

![Prototype Landing page](/docs/Desktop-Prototype-3.png)

### <u>Mockup Responsive Mobile</u>

The original mockup design for the mobile version keeps the iPod as the focal point of the page with the list container below. The episode items within the list are changed to a vertical layout compared to in the horizontal desktop version. 

<img src="/docs/iPhone-Mockup-1.png" alt="Overview mobile mockup" width="250" height="auto">

<img src="/docs/iPhone-Mockup-2.png" alt="Overview mobile mockup" width="250" height="auto">

<img src="/docs/iPhone-Mockup-3.png" alt="Overview mobile mockup" width="250" height="auto">

### <u>Prototype Responsive Mobile</u>

The mobile prototype design is similar to the mockup. The **episode items** within the list container are **larger than in the mockup**, which helps with **legibility**. 

<img src="/docs/iPhone-Prototype-1.png" alt="Overview mobile mockup" width="250" height="auto">
<img src="/docs/iPhone-Prototype-2.png" alt="Overview mobile mockup" width="250" height="auto">
<img src="/docs/iPhone-Prototype-3.png" alt="Overview mobile mockup" width="250" height="auto">

#### <u>Code Reflections</u>

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

## Closing Words 

Overall, creating this prototype website was quite a **difficult**, but also very **rewarding process**. It taught me to look beyond the materials taught during the lectures and tutorials and to work on my **problem solving skills**. The **responsiveness** was one of the trickier concepts to get my head around, but thanks to this final assignment, I feel a greater level of understanding of it than before. For my next website, I would consider **more planning**, such as considering more **accessibility** and **responsiveness** before coding, and I also would take more care in **structuring the CSS**, like creating more common elements to avoid having to re-use a lot of code. I also look forward to learning more about **JavaScript** in Advanced Web Design, as I purposefully avoided it for this assignment in order to challenge and strengthen my **HTML and CSS understanding**. 

## References

Yaman, İ. (2016). The Potential Benefits of Podcasts for Language Learning. Journal of Educational and Instructional Studies, 6(1), 60–66.