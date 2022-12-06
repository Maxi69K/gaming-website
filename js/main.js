// Gaming Website with Expandable Cards
const cards = document.querySelectorAll('.card-container');
const cardTitle = document.querySelector('.card-title');

cards.forEach(card => {
    card.addEventListener('click', e => {
        if (!card.classList.contains('active')) {
            cards.forEach(card => {
                card.classList.remove('active');
                card.childNodes[3].style.display = 'none';
            });
        };
        card.classList.toggle('active');
        card.childNodes[3].style.display = 'block';

        cards.forEach(card => {
            if (!card.classList.contains('active')) {
                card.childNodes[3].style.display = 'none';
            }
        });
    });
});