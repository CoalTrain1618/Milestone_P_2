![Grom](./docs/appFeaturesImgs/gromReadMe.png)
# Match Thy Meme



![Multi device image](./docs/appFeaturesImgs/MultiMediaDisplay.png)
---

## Content

* [Features](#featre)
* [Development process](#Develop)
* [User Story Tests](#usrStry)
* [WireFrames](#wireFrm)
* [Technologies](#techno)
* [Testing](#testing)
  * [Wave Tests](#waveTest)
  * [W3C Tests](#w3cTest)
  * [Lighthouse Tests](#LightHTest)
  * [Browser Tests](#brwsTest)
  * [Functional Testing](#FncTest)
* [Deployment Control](#depCtr)
* [Credits](#cred)


## Features



<a id="featre"></a>

### Home Page

#### Banner
![Banner](./docs/appFeaturesImgs/Banner.png)

- Page header that prominently showcases the game's title.

- Reinforces the game's theme, making it easily recognisable to players.

#### Volume Control
 
![Volume Control](./docs/appFeaturesImgs/audioControls.png)

- A playful audio control interface that allows users to manage playback and volume through an interactive design.

- Empowers users with full control over game audio, enhancing the experience with customisable sound adjustments.

#### Game Instructions

![Game info](./docs/appFeaturesImgs/instructions.png)

- Displays clear guidance on how to play the game, ensuring players understand the mechanics.

- Improves user experience by reducing confusion and encouraging engagement, making gameplay smoother and more enjoyable.

#### Countdown timer

![Countdown](./docs/appFeaturesImgs/gameTimer.png)

- A countdown time mechanic that visually displays the remaining seconds before the game ends.

- Adds urgency and excitement, encouraging players to make quick decisions while enhancing the competitive aspect of gameplay.

#### Card Grid

![Card grid](./docs/appFeaturesImgs/cardGrid.png)

- A structured arrangement of cards displayed in a grid layout, ensuring a clear and organised game interface.

- Provides players with an intuitive visual format for interacting with the game, making gameplay smoother and more engaging.

#### Rest Button

![Reset Button](./docs/appFeaturesImgs/resetBtn.png)

- A dedicated button that allows users to restart the game, resetting all active elements, audio and progress.

- Provides a quick way to start fresh, ensuring a seamless experience when players want to retry or improve their attempt.

#### Modal

![Modal](./docs/appFeaturesImgs/modalLose.png)
![Modal](./docs/appFeaturesImgs/modalTwothree.png)
![Modal](./docs/appFeaturesImgs/modalFourFive.png)
![Modal](./docs/appFeaturesImgs/modalWin.png)

- A pop-up overlay that displays a completion message when the game ends, providing feedback to the player.

- Enhances user experience by clearly signaling game completion and displaying their completion time.

#### 404 Error page

![404 error page](./docs/appFeaturesImgs/404Page.png)

- Custom 404 page for: Error page not found

- Cosutom design ensures user experiances continuity across each page.
---
<a id="Develop"></a>

## Development process

### Overview
 To ensure a focused approach to building my application, I initially coded the base build in a separate repository. [Original Repository](https://github.com/CoalTrain1618/testBuild). This allowed me to concentrate solely on the development environment without the added pressure of an assessment-driven workflow. By structuring my process this way, I prioritised learning and experimentation over commit tracking, ensuring I could refine my skills and fully immerse myself in the development experience.

### Rationality
  I wanted to create a pure, build-focused environment—one where I could work independently without external influences or immediate feedback. To achieve this, I deliberately kept the project offline, allowing myself to think critically about development, debugging, and feature experimentation. Minimising outside assistance was a key factor in this decision, as it challenged me to push my skills further and gain a deeper understanding of the coding process.

### Reflections
  Developing this project in the way I did was an incredibly rewarding experience. I truly believe I wouldn’t have achieved this depth of learning through any other method. Throughout the build, I pushed through numerous barriers in my programming skills, and as a result, my confidence has grown significantly compared to when I first started.

  However, there were drawbacks that I would improve upon in future projects. Specifically, I aim to better document my debugging processes, experimentation phases, and the reasoning behind restructuring my code. Despite these challenges, I did manage to record the restructuring of my biggest bug involving the audio, which provided valuable insight into my development journey. ([Audio bug report](./docs/testing/audioBugReport.docs

<a id="usrStry"></a>

## User Story testing

|     UserStory         |          Testing             |
| ----------------------|------------------------------|
| As a player, I want to seamlessly initiate the game when clicking on a card to allow for accurate timing, so that the timer starts counting down as soon as I click a card. | Users can click card to begin playing and countdown timer will start on click, allowing for precise timing.  |
| As a player, I want my click/press to smoothly flip a card, so that I can reveal its contents and determine if it forms a matching pair easily and have 3d flipping effects for depth and immersion | Added CSS 3D flipping animation for user engagement. Along with functionality to track flipped cards for matches.  | 
| As a player, I want a visible countdown timer, so that I feel the pressure and excitement of completing the game within a set time. I would also like to see the time it took me to finish. | Added 30s countdown timer for enhanced experience along with a user completion time on the victory modal |
| As a player, I want a clearly marked “Reset” button on the screen, so that when I complete a game or if I get stuck, I can easily restart the game and play. | Added Reset button and  functionality, which swiftly reset all aspects of the game for another attempt. |
| As a player, I want responsive music along with volume controls, so that I can tailor the audio effects or pause the sound to suit my environment and needs. | Added different music to correspond with the game's state, along with audio controls which allows user to set as needed. |
| As a winner I would like to see a victory screen to alert me when I have conquered the game. | Added a victory pop up modal which activates winning music and congratulations message, along with completion time |

---

<a id="wireFrm"></a>

### link to Wireframes Here !

PDF file containing all Wireframes designs
[Wireframes PDF](./docs/wireframes/MatchThyMeme-Wireframes.pdf)

---

<a id="technodocs

### Technologies Used Here
----

* HTML
  * Main structure of the website

* CSS
  * Styling the website with an external CSS file"

* JavaScript
  * Used for adding in Bootstrap & Font Awesome functionality

* Favicon.io
  * Used for favicons generated 

* Balsamiq
  * Creating and designing the Wireframes for Men of Wales 

* GitHub
  * used for hosting files and deployment

* Git
  * Used for committing changes and pushing to GitHub.

* VS Code
  * Code editor used for writing all code in this project. 

* Lighthouse 
  * USed for website performance testing

* Wave 
  * Used for testing website  accessibility

* W3C
  * Used for code validation

---

<a id="testing"></a>

# Testing

<a id="waveTest"></a>

## Wave Testing

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs.
- Colour contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user.
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions.
- All non-textual content had alternative text or titles so descriptions are read out to screen readers.
- HTML page lang attribute has been set.
- ARIA properties have been implemented correctly.
- WCAG 2.1 Coding best practices being followed.

## Wave Test Results
#### Index Wave Results
![index wave](./docs/testing/waveTest.png)

#### 404 wave result

![404 Wave test](./docs/testing/404Wave.png)

---

<a id="w3cTest"></a>

## W3C Code Validation

I used the W3C code validator to check that all HTML code is valid. I pasted each page's code into the validator individually for the most accurate validation.

## Results
#### index.html
![index.html](./docs/testing/404Validation.png)

#### 404.html
![404.html](./docs/testing/404Validation.png)

#### CSS
![](./docs/testing/cssValidation.png)

Satisfied with the result of no errors, I then tested the HTML with the URL testing method.

#### URL test HTML

![URL test](./docs/testing/htmlUrlTest.png)


All tests yielded no errors.

---

<a id="LightHTest"></a>

## Lighthouse testing for performance scores

 - I used Lighthouse testing for performance tests, checking that the site runs smoothly on both desktop and mobile. As expected, mobile results are slightly lower.

## Results

## index.html - Desktop

![Desktop result](./docs/testing/indexLighthouseRlt.png)

 - Very satisfied with a perfect 100 across the board. A previous test attempt resulted in an SEO score of 90, revealing a missing meta description in the HTML display. After addressing this issue, the latest test achieved full marks.

## index.html - Mobile

![Mobile Result](./docs/testing/indexLighthouseMobile.png)

  - I anticipated lower results for mobile testing, but I'm pleasantly surprised and very happy with the outcome.
---


---

<a id="brwsTest"></a>

## Browser Testing 

 - I conducted browser tests using four different browsers to check for visual discrepancies and responsive design. Safari tests were conducted on a MacBook.

 |    Browser     |        Version         |      Visual Discrepancies     |                   Responsive Design                     |
 |----------------|------------------------|-------------------------------|---------------------------------------------------------|
 |   Google       |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |
 |   Edge         |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |
 |   Brave        |        Latest          |    No visual discrepancies    | Site remains responsive on all pages and screen sizes   |
 |   Safari       |        Latest          |    Visual discrepencies see document ([Safari Browser bugs](./docs/testing/safariVisual.md))   | Site remains responsive on all pages and screen sizes   |
---

<a id="FncTest"></a>

## Functional Testing

### Test Case index

#### Interactables

- Play/Pause audio button
  - Music Play Pause state corresponds to button - TC11
  - plays correct track when pausing and playing at different points - TC12
  - Audio does not play when opting to have audio paused for entire game - TC13 & TC14

- Volume Slider
  - Correctly lowers || elevates volume - TC15

- Card Flips
  - Card Matches - TC1
  - Non matching Cards flip back - TC1
  - Card Matches stay flipped - TC2 
  - Can only flip two Cards - TC3
  - Cards cannot be flipped when game ends by matching all pairs - TC4
  - Timer starts on card flip - TC5
  - Timer stop counting when all cards matched & time hits 00:00 - TC6 & TC7
  - Cards cannot be flipped when game ends by runnnig out of time - TC8
  
- Reset Button
  - Resets game arrays and reinstates values - TC9
  - Cues correct music on reset - TC9
  - Shuffles cards - TC9

- Modal
  - Modal pops up when game won - TC16
  - Modal Close button - TC18
  - Modal displays valid player score - TC17
  - Modal displays correct content depending on matchedPair amount at game over - TC19, TC20, TC21 & TC22

### Manual Testing Document

### [Testing Document here](./docs/testing/functionalTesting.md)

---

### 404 error page test

- I placed random text into the index.html to test the 404 page loads

   ![404 Error](./docs/testing/randomText404.png)

- I then submitted the URL and the 404 page successfully loaded

   ![404 success](./docs/testing/404Success.png)


---

<a id="depCtr"></a>

## Deployment

### Version Control

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘tacos-travels’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub Pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab.
  - From the menu on the left, select Pages.
  - From the source section drop-down menu, select the Branch: main.
  - Click Save.
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://github.com/CoalTrain1618/Milestone_P_2

### Clone the Repository Code Locally

Navigate to the GitHub repository you want to clone to use locally:

 - Click on the Code drop-down button.
 - Click on HTTPS.
 - Copy the repository link to the clipboard.
 - Open your IDE of choice (Git must be installed for the next steps).
 - Type git clone copied-git-url into the IDE terminal.

The project will now have been cloned to your local machine for use.

---

<a id="cred"></a>

## Credits

### Image Credits

- Gromit the dog gave consent for his image to be used

![Gromit's signiture]()

### Music
#### All tracks obtained from royalty-free site [Pixabay.com](https://pixabay.com/)
- bgMusic.mp3 - Producer: [Dream-Protocol](https://pixabay.com/users/dream-protocol-9556087/)
- gameOn.mp3 - Producer: [lucadialessandro](https://pixabay.com/users/lucadialessandro-25927643/)
- winning.mp3 - Producer: [moodmode](https://pixabay.com/users/moodmode-33139253/) 


### Honourable mentions 

- Mentor: Gareth, who assisted with ideas and guidance throughout the project.
- Tutor: Marko, who offered guidance throughout the project.
- Fellow Students who offered feedback on the project.
  - Seren 
  - Teseo 
  - Anastasiya
  - Alex

### Tech

- Microsoft Photos for image resizing.
- freeconvert.com [website]((https://www.freeconvert.com/webp-converter)) for converting images to webp format.
- Microsoft paint for logo colouring
- xplodivity on YouTube for the 3d card flip learning content: [YouTube Video](https://www.youtube.com/watch?v=IZIMGn1Usrw)
- Excel to markDown table converter [tableconverter.com](https://tableconvert.com/)
