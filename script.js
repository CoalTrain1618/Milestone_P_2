document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedPairs = 0;
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Card Shuffle Call
    shuffleCards();

    let timeLeft = 30;
    const timer = document.getElementById("timer");
    let timerCount = null;
    let timerStarted = false;

    // Player Time
    let pTime = document.getElementById("playerTime");
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    //modal variables for function
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
    audioPlayer.volume = 0.3;
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
        if (trackIndex < 0 || trackIndex >= musicTracks.length) {
            console.error("Invalid track index:", trackIndex);
            return;
        }
        audioPlayer.src = musicTracks[trackIndex];
        audioPlayer.play();
    }

    // Event listener for play/pause button
    playPauseButton.addEventListener("click", () => {
        if (!audioPlayer.src) {
            playTrack(0);
            playPauseButton.textContent = "Pause";
            return;
        }
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = "Play";
        }
    });

    // Event listener for volume control
    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
    });


    // Function to update the audio track based on the game state
    function updateAudioTrack(trackIndex) {
        if (!audioPlayer.paused) {
            playTrack(trackIndex);
        } else {
            audioPlayer.src = musicTracks[trackIndex];
            audioPlayer.load();
        }
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────
        
    //Function for card shuffle
    function shuffleCards() {
        const cardsContainer = document.querySelector('.cards-grid');
        const cards = Array.from(cardsContainer.children);
        cards.sort(() => Math.random() - 0.5)
        cards.forEach(card => cardsContainer.appendChild(card));
    }
        
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Function to start countdown
    function startGameTimer() {
        timerCount = setInterval(() => {
            timer.textContent = timeLeft < 10 ? `Time Left: 00:0${timeLeft}` : `Time Left: 00:${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timerCount);
                updateAudioTrack(0);
                gameActive = false;
                return;
            }

            timeLeft--;
        }, 1000);
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────
    // Event listener for Card click/press
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (!gameActive) return;

            const clickedCard = event.currentTarget;

            if (flippedCards.length >= 2 || clickedCard.classList.contains('flip')) return;

            clickedCard.classList.add('flip'); // Adds class to activated card
            flippedCards.push(clickedCard);

            if (!timerStarted) {
                startGameTimer();
                timerStarted = true;
            }

            if (!isGamePlaying) {
                updateAudioTrack(1);
                isGamePlaying = true;
            }
            
            if (flippedCards.length === 2) {
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
                modal.style.display = "block"; // displays modal from hidden
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