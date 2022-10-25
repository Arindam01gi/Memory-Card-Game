const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

// console.log(cards);
let matchedCard =0;
let maxTime =20;
let timeLeft = maxTime ;
let cardOne,cardTwo,timer;
let disableDeck = false;
let isPlaying = false;


function initTimer(){
   if(timeLeft <=0 ){
      return clearInterval(timer);
   }
   timeLeft--;
   timeTag.innerText = timeLeft;
}

function flipCard(event){
    let clickedCard = event.target;

    if(!isPlaying){
      isPlaying=true;
      timer = setInterval(initTimer,1000)
    }


   if(clickedCard!== cardOne && !disableDeck && timeLeft > 0 ){
      flips++;
      flipsTag.innerText = flips;
    clickedCard.classList.add("flip");
    if(!cardOne){
       return  cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true ; 
    let cardOneImg = cardOne.querySelector('img').src,
    cardTwoImg = cardTwo.querySelector('img').src;
    matchCards(cardOneImg , cardTwoImg)
   }
   
}
   function matchCards(img1,img2){
    if(img1 === img2){
        matchedCard++;
        if(matchedCard==6 && timeleft > 0){
         return clearInterval(timer);
        
        }
        cardOne.removeEventListener("click",flipCard);
        cardTwo.removeEventListener("click",flipCard);
        cardOne = cardTwo ="";
        return disableDeck = false ;
    }
     setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
     },400);
     setTimeout(()=>{
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo ="";
        disableDeck = false ; 
     },1200);

   }

function shuffleCard(){
     timeLeft = maxTime;
     flips = matchedCard = 0;
     cardOne = cardTwo = "";
     clearInterval(timer);
     timeTag.innerText = timeLeft;
     flipsTag.innerText = flips;
     disableDeck = isPlaying = false;
     let arr = [1,2,3,4,5,6,1,2,3,4,5,6];
     arr.sort(()=>Math.random()> 0.5 ? 1: -1);
     cards.forEach((card,index) =>{
        card.classList.remove("flip");
        let imgTag = card.querySelector('img');
        imgTag.src = `img/img-${arr[index]}.png`

        card.addEventListener('click',flipCard);
    })
}
shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card =>{
    card.addEventListener('click',flipCard);
})