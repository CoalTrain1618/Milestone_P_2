document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedPairs = 0;

    // Card Shuffle Call
    shuffleCards();

    let timeLeft = 30;
    const timer = document.getElementById("timer");
    let timerCount = null;
    let timerStarted = false;

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

    // Event listener for Card click/press
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            const clickedCard = event.currentTarget;

            if (flippedCards.length >= 2 || clickedCard.classList.contains('flip')) return;

            clickedCard.classList.add('flip'); // Adds class to activated card
            flippedCards.push(clickedCard);

            if (!timerStarted) {
                startGameTimer();
                timerStarted = true;
            }

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        });
    });

    // ──────────────────────────────────────────────────────────────────────────────────────────────
        
    //Function for card shuffle
    function shuffleCards() {
        const cardsContainer = document.querySelector('.cards-grid');
        const cards = Array.from(cardsContainer.children);
        cards.sort(() => Math.random() - 0.5)
        cards.forEach(card => cardsContainer.appendChild(card));
    }
        
    // ──────────────────────────────────────────────────────────────────────────────────────────────

    function startGameTimer() {
        timerCount = setInterval(() => {
            timer.textContent = timeLeft < 10 ? `Time Left: 00:0${timeLeft}` : `Time Left: 00:${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timerCount);
                return;
            }

            timeLeft--;
        }, 1000);
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────

    // Function to check for matched cards.
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const meme1 = card1.getAttribute('data-meme');
        const meme2 = card2.getAttribute('data-meme');

        if (meme1 === meme2) {
            matchedPairs++;
            flippedCards = [];
            if (matchedPairs === 6) {
                clearInterval(timerCount);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flip');
                card2.classList.remove('flip');
                flippedCards = [];
            }, 1000); 
        }
    }

    // ──────────────────────────────────────────────────────────────────────────────────────────────


    // Reset functionality 
    const reset = document.getElementById("reset");
    reset.addEventListener('click', (event) => {
        shuffleCards();
        flippedCards = [];
        matchedPairs = 0;
        timer.textContent = "00:30";
        timeLeft = 30;
        timerStarted = false;
        clearInterval(timerCount);
        timerCount = null;
        cards.forEach(card => {
            card.classList.remove('flip');
        });
    });    
});