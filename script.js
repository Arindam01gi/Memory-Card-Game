const cards = document.querySelectorAll(".card");

// console.log(cards);

let cardOne,cardTwo;

function flipCard(event){
    let clickedCard = event.target;
    clickedCard.classList.add("flip");
    if(!cardOne){
       return  cardOne = clickedCard;
    }
    cardTwo = clickedCard;

    console.log(cardOne,cardTwo);

}

cards.forEach(card =>{
    card.addEventListener('click',flipCard);
})