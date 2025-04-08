![Match Thy Meme]() 
#Match Thy Meme



![Multi device image]()
---

## Content

* [Features](#featre)
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

- Reinforces the game's theme, making it easily recognizable to players.

#### Volume Control
 
![Volume Control](/assets/appFeaturesImgs/audioControls.png)

- A playful audio control interface that allows users to manage playback and volume through an interactive design.

- Empowers users with full control over game audio, enhancing the experience with customizable sound adjustments.

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

- A structured arrangement of cards displayed in a grid layout, ensuring a clear and organized game interface.

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
![index wave](/assets/testingImgs/waveTest.png)

- 12 Alerts are related to the '< p > ? < /p >' not being headings. As it didn't seem necessary to update them, I left them as is. 

#### 404 wave result
![404 wave](/assets/testingImgs/wave404.png)

---

<a id="w3cTest"></a>

## W3C Code Validation

I used the W3C code validator to check that all HTML code is valid. I pasted each page's code into the validator individually for the most accurate validation.

## Results
#### index.html
![index.html](./assets/images/w3c-Validation/indexHtml%20validation.png)

Satisfied with the result of no errors, I then tested the HTML and CSS with the URL testing method.

#### URL test HTML


#### URL test CSS


Both tests yielded no errors.

---

<a id="LightHTest"></a>

## Lighthouse testing for performance scores

I used Lighthouse testing for performance tests, checking that the site runs smoothly on both desktop and mobile. As expected, mobile results are slightly lower.

When putting each page through testing, tests showed that the images were originally oversized, causing unnecessary load times. As a result, I resized every image on the website for better optimisation, as well as changed their format to .webp.

## Results

## index.html

## 404 Error Page
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
 |   Safari       |        Latest          |   No visual discrepancies     | Site remains responsive on all pages and screen sizes   |
---

<a id="FncTest"></a>

## Functional Testing


## Results

### - Index HTML

| Line of Code | Desired Destination | Target _blank | Test Case                | Description                                        | Status |
|--------------|---------------------|---------------|--------------------------|----------------------------------------------------|--------|
|   |   |     |  |  |    |
|   |   |     |  |  |    | 
|   |   |     |  |  |    |



### 404 error page 

- I placed random text into the index.html to test the 404 page loads

  - ![404 Error](./assets/images/website-features/404-error-input.png)

- I then submitted the URL and the 404 page successfully loaded

  - ![404 success](./assets/images/website-features/404-error-success.png)


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

- 
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
