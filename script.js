document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedPairs = 0;
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Card Shuffle Call
    shuffleCards();

    let timeLeft = 30; // timer is set to 30 seconds
    const timer = document.getElementById("timer");
    let timerCount = null;
    let timerStarted = false; 

    // Player Time
    let pTime = document.getElementById("playerTime");
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    //modal variables for function
    let modalBackground = document.getElementById("modalBackdrop") 
    let modal = document.getElementById("endModal");
    let modalClose = document.querySelector(".modalClose");
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Audio
    // Tracks array
    const musicTracks = [
        "assets/music/bgMusic.mp3", // Idle state
        "assets/music/gameOn.mp3", // Playing state
        "assets/music/winning.mp3" // Winning state
    ];

    const audioPlayer = new Audio();
    audioPlayer.volume = 0.3; // msuic's natural volume level
    audioPlayer.loop = true; 

    const playPauseButton = document.getElementById("play-pause");
    const volumeControl = document.getElementById("volume-slide");
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    //Game Status flags
    let isGamePlaying = false; // flag ensures music doesn't restart on each card flip
    let gameActive = true; // flag for game state to enable / disable card flipping 
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Audio Function

    function playTrack(trackIndex) {
        if (trackIndex < 0 || trackIndex >= musicTracks.length) { // checks for call error
            console.error("Invalid track index:", trackIndex); 
            return;
        }
        audioPlayer.src = musicTracks[trackIndex]; //loads track to .src
        audioPlayer.play(); //plays loaded track
    }

    // Event listener for play/pause button
    playPauseButton.addEventListener("click", () => {
        if (!audioPlayer.src) { //if src is empty 
            playTrack(0); 
            playPauseButton.textContent = "Pause"; // ensures button changes to reflect state of audio
            return;
        }
        if (audioPlayer.paused) { // checks if audio is paused andplays music when clicked
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        } else { // else (i.e .play) then pause if clicked
            audioPlayer.pause(); 
            playPauseButton.textContent = "Play"; 
        }
    });

    // Event listener for volume control
    volumeControl.addEventListener("input", () => { // handles user volume input
        audioPlayer.volume = volumeControl.value;
    });


    // Function to update the audio track based on the game state
    function updateAudioTrack(trackIndex) { 
        if (!audioPlayer.paused) { // checks if audio button not paused, then play music
            playTrack(trackIndex);
        } else { 
            /* if music is paused, track will still load without playing. Ensures correct msuic track is ready to play if 
            user chooses to play audio partly through game. */
            audioPlayer.src = musicTracks[trackIndex];
            audioPlayer.load();
        }
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────
        
    //Function for card shuffle
    function shuffleCards() {
        const cardsContainer = document.querySelector('.cards-grid'); // selects parent of cards
        const cards = Array.from(cardsContainer.children); // targets children of cards-grid
        cards.sort(() => Math.random() - 0.5); // randomly generates card order between -0.5 & 0.5 
        cards.forEach(card => cardsContainer.appendChild(card)); // re-attaches the shuffled cards to grid
    }
        
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Function to start countdown
    function startGameTimer() { 
        timerCount = setInterval(() => { 
            // conditional for timer display, if less than 10s first display, else seceond display
            timer.textContent = timeLeft < 10 ? `Time Left: 00:0${timeLeft}` : `Time Left: 00:${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timerCount); // stops countdown at zero
                updateAudioTrack(0);
                gameActive = false; // freezes gaem if time runs out
                return;
            }

            timeLeft--; // takes away 1
        }, 1000); // loops for every 1000 miliseconds/ 1 second
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Event listener for Card click/press
    cards.forEach(card => {
        card.addEventListener('click', (event) => { // Upon click trigger following events
            if (!gameActive) return; // triggers game activity 

            const clickedCard = event.currentTarget; // applies listed events to current card

            if (flippedCards.length >= 2 || clickedCard.classList.contains('flip')) return;

            clickedCard.classList.add('flip'); // Adds class to activated card
            flippedCards.push(clickedCard);

            if (!timerStarted) { // calls the game timer function if not already called.
                startGameTimer();
                timerStarted = true; // When true, prevents timer from restarting on every card flip
            }

            if (!isGamePlaying) { // cehcks if game is not playing || isGamePlaying = false
                updateAudioTrack(1); // initiates gaming music if is Game is initiated
                isGamePlaying = true; 
            }

            if (flippedCards.length === 2) { // calls checks for match 
                checkForMatch();
            }
        });
    });
        

    // ──────────────────────────────────────────────────────────────────────────────────────────────

    // Function to check for matched cards.
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const meme1 = card1.getAttribute('data-meme'); // assigns data value to meme1&2 data value ex (html LINE:145 - data-meme="meme5")
        const meme2 = card2.getAttribute('data-meme');

        if (meme1 === meme2) { // conditional equality check
            matchedPairs++; // if memes match +1 to matchedPairs
            flippedCards = []; // clear array
            if (matchedPairs === 6) {  // winning conditionalstatement
                clearInterval(timerCount); // stops setInterval timer from counting 
                modal.style.display = "block";  // displays modal from hidden
                modalBackground.style.display = "block"; 
                pTime.textContent = `You did it in: 00:${29 - timeLeft}s`; // player completion time display 
                updateAudioTrack(2);
            }
        } else {
            setTimeout(() => { // if cards dont match
                card1.classList.remove('flip'); // remove class
                card2.classList.remove('flip');
                flippedCards = [];
            }, 1000); // 1000 milisecond delay
        }
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────

    // Event listener for closing the modal
    modalClose.addEventListener('click', () => {
        modal.style.display = "none"; // hides modal
        modalBackground.style.display = "none";
        updateAudioTrack(0);
    });

    // ──────────────────────────────────────────────────────────────────────────────────────────────

    // Reset functionality 
    const reset = document.getElementById("reset");
    reset.addEventListener('click', (event) => {
        shuffleCards(); // re-shuffles cards
        flippedCards = []; // resets back to empty
        matchedPairs = 0; 
        timer.textContent = "Time Left: 00:30"; // set back to original text
        timeLeft = 30; 
        timerStarted = false; // re-instates flag
        clearInterval(timerCount); // clears setIntervalTimer
        timerCount = null;  
        isGamePlaying = false; // re-instates flag
        updateAudioTrack(0);
        gameActive = true; // re-instates flag
        cards.forEach(card => {
            card.classList.remove('flip'); // Removes flip from cards.
        });
    });    
});