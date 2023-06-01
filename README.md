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

#####1. Clone the GitHub Repository
Use your terminal to clone the repository to your local machine
```HTML
git clone https://github.com/janaplumm/jplu8728-tracker.git
```
#####2. Install Node.js
Download the Installer from the [Node.js Website](https://nodejs.org) and install Node.js and npm (Node Package Manager). Verify that the installation was successful. 
```HTML
node --version
```
#####3. Install Dependencies
In the root directory of the cloned GitHub repository, install the Express framework. 
```HTML
npm install express
```
#####4. Start the Server 
Start the web server using the script defined in the package.json file. 
```HTML
npm run start
```
#####5. Open the Application 
Open your web browser and go to the localhost URL (port number may vary if port is taken). 
```HTML
http://localhost:8888
```

<br>


## 1. Podfetch: Overview

### <u>Mockup Desktop</u>

Summary

![Mockup Landing page](/docs/Desktop-Mockup-1.png)

### <u>Prototype Desktop</u>

Summary

![Prototype Landing page](/docs/Desktop-Prototype-1.png)

### <u>Mockup Mobile</u>

Summary

<img src="/docs/iPhone-Mockup-1.png" alt="Overview mobile mockup" width="250" height="auto">

<img src="/docs/iPhone-Mockup-2.png" alt="Overview mobile mockup" width="250" height="auto">

### <u>Prototype Mobile</u>

Summary

<img src="/docs/iPhone-Prototype-1.png" alt="Overview mobile mockup" width="auto" height="auto">

#### <u>Reflections</u>

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

## 2. Podfetch: Add Episode Pop-up

### <u>Mockup Desktop</u>

Summary

![Mockup Landing page](/docs/Desktop-Mockup-2.png)

### <u>Prototype Desktop</u>

Summary

![Prototype Landing page](/docs/Desktop-Prototype-2.png)

### <u>Mockup Mobile</u>

Summary

<img src="/docs/iPhone-Mockup-3.png" alt="Overview mobile mockup" width="250" height="auto">

### <u>Prototype Mobile</u>

Summary

<img src="/docs/iPhone-Prototype-2.png" alt="Overview mobile mockup" width="250" height="auto">

#### <u>Reflections</u>

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

## 3. Podfetch: Show Details Pop-up

### <u>Mockup Desktop</u>

Summary

![Mockup Landing page](/docs/Desktop-Mockup-3.png)

### <u>Prototype Desktop</u>

Summary

![Prototype Landing page](/docs/Desktop-Prototype-3.png)

### <u>Mockup Mobile</u>

Summary

<img src="/docs/iPhone-Mockup-4.png" alt="Overview mobile mockup" width="250" height="auto">

### <u>Prototype Mobile</u>

Summary

<img src="/docs/iPhone-Prototype-3.png" alt="Overview mobile mockup" width="250" height="auto">

#### <u>Reflections</u>

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