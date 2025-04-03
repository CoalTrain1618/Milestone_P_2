document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedPairs = 0;

    // Event listener for Card click/press
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            const clickedCard = event.currentTarget;

            if (flippedCards.length >= 2 || clickedCard.classList.contains('flip')) return;

            clickedCard.classList.add('flip'); // Adds class to activated card
            flippedCards.push(clickedCard);
        });
    });
});