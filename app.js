document.addEventListener('DOMContentLoaded', ()=>{

    //card options
    const cardArray = [
        {
        name: 'cheeky',
        img: 'images/cheeky.png'
    },
    {
        name: 'cheeky',
        img: 'images/cheeky.png'
    },

    {
        name: 'cool',
        img: 'images/cool.png'
    },
    {
        name: 'cool',
        img: 'images/cool.png'
    },

    {
        name: 'hearts',
        img: 'images/hearts.png'
    },
    {
        name: 'hearts',
        img: 'images/hearts.png'
    },

    {
        name: 'loved',
        img: 'images/loved.png'
    },
    {
        name: 'loved',
        img: 'images/loved.png'
    },

    {
        name: 'sad',
        img: 'images/sad.png'
    },
    {
        name: 'sad',
        img: 'images/sad.png'
    },

    {
        name: 'wink',
        img: 'images/wink.png'
    },
    {
        name: 'wink',
        img: 'images/wink.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = [];

//create you board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', "images/blank.png")
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]){
        alert('Match Found!!')
        cards[optionOneId].setAttribute('src', 'images/blue.png')
        cards[optionTwoId].setAttribute('src', 'images/blue.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations!! You Found All The Cards!!'
    }
}

//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 300)
    }
}

createBoard()

})