![Grom](/assets/appFeaturesImgs/gromReadMe.png)
# Match Thy Meme



![Multi device image](/assets/appFeaturesImgs/MultiMediaDisplay.png)
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
![Banner](/assets/appFeaturesImgs/Banner.png)

- Page header that prominently showcases the game's title.

- Reinforces the game's theme, making it easily recognisable to players.

#### Volume Control
 
![Volume Control](/assets/appFeaturesImgs/audioControls.png)

- A playful audio control interface that allows users to manage playback and volume through an interactive design.

- Empowers users with full control over game audio, enhancing the experience with customisable sound adjustments.

#### Game Instructions

![Game info](/assets/appFeaturesImgs/instructions.png)

- Displays clear guidance on how to play the game, ensuring players understand the mechanics.

- Improves user experience by reducing confusion and encouraging engagement, making gameplay smoother and more enjoyable.

#### Countdown timer

![Countdown](/assets/appFeaturesImgs/gameTimer.png)

- A countdown time mechanic that visually displays the remaining seconds before the game ends.

- Adds urgency and excitement, encouraging players to make quick decisions while enhancing the competitive aspect of gameplay.

#### Card Grid

![Card grid](/assets/appFeaturesImgs/cardGrid.png)

- A structured arrangement of cards displayed in a grid layout, ensuring a clear and organised game interface.

- Provides players with an intuitive visual format for interacting with the game, making gameplay smoother and more engaging.

#### Rest Button

![Reset Button](/assets/appFeaturesImgs/resetBtn.png)

- A dedicated button that allows users to restart the game, resetting all active elements, audio and progress.

- Provides a quick way to start fresh, ensuring a seamless experience when players want to retry or improve their attempt.

#### Victory Modal

![Modal](/assets/appFeaturesImgs/modal.png)

- A pop-up overlay that displays a completion message when the game ends, providing feedback to the player.

- Enhances user experience by clearly signaling game completion and displaying their completion time.

#### 404 Error page

![404 error page](/assets/appFeaturesImgs/404Page.png)

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

  However, there were drawbacks that I would improve upon in future projects. Specifically, I aim to better document my debugging processes, experimentation phases, and the reasoning behind restructuring my code. Despite these challenges, I did manage to record the restructuring of my biggest bug involving the audio, which provided valuable insight into my development journey. ([Audio bug report](/assets/testing/audioBugReport.md))



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
[Wireframes PDF](/assets/wireframes/MatchThyMeme-Wireframes.pdf)

---

<a id="techno"></a>

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
![index wave](/assets/testing/waveTest.png)

- 12 Alerts are related to the '< p > ? < /p >' not being headings. As it didn't seem necessary to update them, I left them as is. 

#### 404 wave result

![404 Wave test](/assets/testing/404Wave.png)

---

<a id="w3cTest"></a>

## W3C Code Validation

I used the W3C code validator to check that all HTML code is valid. I pasted each page's code into the validator individually for the most accurate validation.

## Results
#### index.html
![index.html](/assets/testing/404Validation.png)

#### 404.html
![404.html](/assets/testing/404Validation.png)

#### CSS
![](/assets/testing/cssValidation.png)

Satisfied with the result of no errors, I then tested the HTML with the URL testing method.

#### URL test HTML

![URL test](/assets/testing/htmlUrlTest.png)


All tests yielded no errors.

---

<a id="LightHTest"></a>

## Lighthouse testing for performance scores

 - I used Lighthouse testing for performance tests, checking that the site runs smoothly on both desktop and mobile. As expected, mobile results are slightly lower.

## Results

## index.html - Desktop

![Desktop result](/assets/testing/indexLighthouseRlt.png)

 - Very satisfied with a perfect 100 across the board. A previous test attempt resulted in an SEO score of 90, revealing a missing meta description in the HTML display. After addressing this issue, the latest test achieved full marks.

## index.html - Mobile

![Mobile Result](/assets/testing/indexLighthouseMobile.png)

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
 |   Safari       |        Latest          |    Visual discrepencies see document ([Safari Browser bugs](/assets/testing/safariVisual.md))   | Site remains responsive on all pages and screen sizes   |
---

<a id="FncTest"></a>

## Functional Testing

### Test Case index

#### Interactables
- Play/Pause audio button
  - Music Play Pause state corresponds to button - [TC11](#TC11) []
  - plays correct track when pausing and playing at different points - [TC12](#TC12) []
  - Audio does not play when opting to have audio paused for entire game - [TC13](#TC13) & [TC14](#TC14) -[]

- Volume Slider
  - Correctly lowers || elevates volume - [TC15](#TC15) []

- Card Flips
  - Card Matches - [TC1](#TC1) []
  - Non matching Cards flip back - [TC1](#TC1) []
  - Card Matches stay flipped - [TC2](#TC2) []
  - Can only flip two Cards - [TC3](#TC3) []
  - Cards cannot be flipped when game ends by matching all pairs - [TC4](#TC4) []
  - Timer starts on card flip - [TC5](#TC5) []
  - Timer stop counting when all cards matched & time hits 00:00 - [TC6](#TC6) & [TC7](#TC7) []
  - Cards cannot be flipped when game ends by runnnig out of time - [TC8](#TC8) []
  
- Reset Button
  - Resets game arrays and reinstates values - [TC9](#TC9) []
  - Cues correct music on reset - [TC9](#TC9) []
  - Shuffles cards - [TC9](#TC9) []

- Modal
  - Modal pops up when game won - [TC16](#TC16) []
  - Modal Close button - [TC18](#TC18) []
  - Modal displays valid player score - [TC17](#TC17)[]

### Manual Testing

|   | Test # | Feature Tested                                                      | Expected behavior                                                        | Status | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |   |
|---|--------|---------------------------------------------------------------------|--------------------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
|   | TC1 <a id="TC1"></a>    | Card Flip on click                                                  |  clicked Card Flips                                                      |        | Test: Flip card to ensure flip card flips and gains .flip class in HTML<br>Steps: <br>1. Open Devtool and inspect card - []<br>2. Click on random cards and check class .flip is added - []<br>3.  Check card flips back when data-meme doesn't match - []<br>4. Observe if class .flip is removed - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |   |
|   | TC2 <a id="TC2"></a>   | Cards Match                                                         | Cards stay flipped on match                                              |        | Test: Matched pair stays flipped when matched - Cards get appended to flippedCards array - matchedPairs increments by 1.<br>Steps: <br>1. Create console log of flippedCards & matchedPairs to display values on pair match - []<br>2. Check console for output  - []<br>3. Pair should stay flipped - []<br>Notes: flippedCards console log should contain cards on match & matchedPairs increments by 1                                                                                                                                                                                                                                                                                                                                                                                                                                             |   |
|   | TC3  <a id="TC3"></a>  | User can only flip two cards at a time                              | When two cards are flipped, player will be unable to flip a third card   |        | Test: I will flip two card both matching and non matching and will atempt to flip a third card whilst others are flipped. <br>Steps: <br>1. Flip card1 & card2 - []<br>2. Click third card whilst cards are in the state of being flipped - []<br>3. Run through with matching pair and non matching pair - []<br>4.  - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |   |
|   | TC4  <a id="TC4"></a>  | Cards cannot be flipped when game ends by winning                   | Unable to flip cards when all pairs are matched                          |        | Test: Check User is unable to interact/flip cards after win<br>Steps: <br>1. Match all pairs to trigger win, then close victory screen - []<br>2. close victory screen so matched cards are display and attempt to flip cards - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |   |
|   | TC5  <a id="TC5"></a>  | Timer starts on card flip                                           | timer starts counting down when first card is flipped                    |        | Test: Countdown timer initiates when card is clicked<br>Steps: <br>1. Click/press card - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |   |
|   | TC6  <a id="TC6"></a>  | Timer stops when all cards are matched                              | Timer stops as soon as all pairs are matched                             |        | Test: Check timer stops when all cards are matched<br>Steps: <br>1. Match all pairs to trigger a win - []<br>2. Check timer has stoped visually - []<br>3. Check timerCount interval is cleared - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |   |
|   | TC7  <a id="TC7"></a>  | Timer stops counting down at 00:00                                  | Timer stays at 00:00                                                     |        | Test: Check that timer stops countding down at 00:00<br>Steps: <br>1. Click card and wait for timer to hit 00:00 - []<br>2. When timer at 00:00 timer should stop - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |   |
|   | TC8  <a id="TC8"></a>  | Cards cannot be flipped when time runs out                          | unable to flip cards when timer hit 00:00                                |        | Test: Ensure cards are not interactable when timer is at 00:00<br>Steps: <br>1. Flip card and wait for timer to hit 00:00 - []<br>2. when timer stops counting attempt to flip cards - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |   |
|   | TC9  <a id="TC9"></a>  | Reset Button                                                        | Resets game to original state                                            |        | Test: Ensure reset button resets all relevant functionality to enable the user to play again.<br>Steps: <br>1. Embed console.logs of values and arrays  into the reset event listener - []<br>2. Initiate game - []<br>3. Press resest - []<br>4. Assess console.log values  - []<br>5. Check all cards are flipped back - []<br>6. Check timer Resets to 00:30 - []<br>7. Check Audio track resets back to idle music - []<br>8. Check cards are shuffled when pressing reset button - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                  |   |
|   | TC10  <a id="TC10"></a> | Play/Pause button                                                   | Plays and pauses music                                                   |        | Test: Plays & pauses music when interacted with<br>Steps: <br>1. Press play button and wait for music to play - []<br>2. Press Pause button to stop playing the music - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |   |
|   | TC11 <a id="TC11"></a>  | Plays correct Music                                                 | Music will change depending on game state Idle/Playing/Winning           |        | Test: Play through game and ensure msuic changes at idle, playing and winning<br>Steps: <br>1. Insert console.log(audioPlayer.src) into updateAudioTrack - []<br>2. Press play msuic button and listen for bgMusic and check console feedback - []<br>3. Initiate game, listen for gameOn.mp3 and check console feedback - []<br>4. Win game, listen for winning music when modal pops up, and check console feedback- []<br>5. Close modal, listen for bgMusic.mp3, and check console feedback - []<br>6. reset and initiate game to load track gameOn.mp3, then reset gaem to check bgMusic.mp3 plays and check console feedback- []<br>Notes:                                                                                                                                                                                                      |   |
|   | TC12 <a id="TC12"></a>  | Correct music loads when audioPlayer is paused                      | Correct track will load if audio player is in paused state               |        | Test: audioPlayer.src is updated even when audio is paused. I will add console.log(audioPlayer.src) to updateAudioPlayer function to display current track in src<br>Steps: <br>1. Initiate play button to enable bgmusic.mp3 to load as audioPlayer is paused on load of DOM. - []<br>2. Pause audio and initiate game, gameOn.mp3 should load. Check console feedback and press play button for audio feedback test. - []<br>3. Pause audio and match all pairs to initiate winning  music winning.mp3. Check console feedback and press play button for audio feedback test. - []<br>4. Pause Audio and close modal, bgMusic should load. Check console feedback and press play for audio feedback test. - []<br>5. Pause Audio and reset game, bgMusic should load. Check console feedback and press play for audio feedback test. - []<br>Notes: |   |
|   | TC13 <a id="TC13"></a>  | Music doesn't play when button is in paused state on loading of DOM | Music will not play                                                      |        | Test:  Play through gaem with music button in puased state, to ensure not audio is played. <br>Steps: <br>1. Music button in paused state on loading of DOM - []<br>2. Play through game and win - Does audio test pass - []<br>3. Reset Does - Does audio test pass - []<br>4. Initiate game and let time run out - Does audio test pass  - []<br>5. Reset game - Does audio test pass - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                |   |
|   | TC14  <a id="TC14"></a> | Music doesn't play when button is in paused state via manual input  | Music will not play                                                      |        | Test: Play through gaem with music button in puased state, to ensure not audio is played. <br>Steps: <br>1. Press Play music and then Pause to initiate manual pause  - []<br>2. Play through game and win - Does audio test pass - []<br>3. Reset Does - Does audio test pass - []<br>4. Initiate game and let time run out - Does audio test pass  - []<br>5. Reset game - Does audio test pass - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                      |   |
|   | TC15  <a id="TC15"></a> | Volume Slider                                                       | Volume slider corresponds to user input of user's choice of audio volume |        | Test: Ensure volume slider alters sound of audio being played.<br>Steps: <br>1. Press play button to initiate music - []<br>2. Slide thumb to the right to increase audio levels- []<br>3. Slide thumb to the left to decrease audio levels - []<br>Notes:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |   |
|   | TC16  <a id="TC16"></a> | Winning Modal                                                       | Modal will appear when all pairs matched                                 |        | Test: Modal displays correctly upon matching all pairs with visual test and console feedback.<br>Steps: <br>1. Create conditional statement to console.log when modal should be triggered. -[]<br>2. Initiate  game and proceed to match all pairs. - []<br>3. Modal auto displays when matchedPairs === 6. - []<br>Notes: Conditional statement used.<br>if (modal.style.display === ""block"") {<br>                    console.log(""Modal is displaying"")<br>               }                                                                                                                                                                                                                                                                                                                                                                    |   |
|   | TC17  <a id="TC7"></a> |  Players completion time                                            | Player's time will display correct time value                            |        | Test: To check calculation of players completion time. Test will run test three different times to prduce different time values and cross refference results for continuity.<br>Example result : completion time = 21s, time left = 9s, timer starting value = 30s<br>Example calculation: 30s - 9s = 21s <br>Steps: <br>1. Initiate gmae - [], [], []<br>2. Proceed to match all pairs - [], [], []<br>3. Obtin test completion time and close modal - [], [], []<br>4. Obtain time left value from game screen - [], [], []<br>5. Take away time left from thirty, then reference answer agaist player's completion time. - [], [], []<br>Result 1:  - []<br>Result 2:  - []<br>Result 3:  - []<br>Notes:                                                                                                                                           |   |
|   | TC18  <a id="TC18"></a> | Modal close button                                                  | Modal will close when pressed                                            |        | Test: Modal will close when player interacts with close button<br>Steps: <br>1. Proceed to match all pairs and trigger winning modal - []<br>2.  Press Close button to check modal.display.style is set back to none. - []<br>Notes:                                                              |   |
|   | 

## Results

### - Index HTML

### 404 error page 

- I placed random text into the index.html to test the 404 page loads

  - ![404 Error]()

- I then submitted the URL and the 404 page successfully loaded

  - ![404 success]()


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

- 

### Honourable mentions 

- Mentor: Gareth, who assisted with ideas and guidance throughout the project.
- Tutor: Marko, who offered guidance throughout the project.
- Fellow Students who offered feedback on the project.
  - Seren hughes
  - Teseo Nicholson
  - anastsia 

### Tech

- Microsoft Photos for image resizing.
- freeconvert.com [website]((https://www.freeconvert.com/webp-converter)) for converting images to webp format.
- Microsoft paint for logo colouring
- xplodivity on YouTube for the 3d card flip learning content: [YouTube Video](https://www.youtube.com/watch?v=IZIMGn1Usrw)
