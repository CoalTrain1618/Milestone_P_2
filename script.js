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