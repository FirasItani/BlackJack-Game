//creat an object
let player = {
  name: "Firas",
  chips: 145
}

let cards = [] // array- ordered list of items
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("italic")
let cardEl = document.getElementById("card")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startgame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards = [firstCard, secondCard]
  rendergame()
}

function rendergame() {
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }
  // cardEl.textContent += cards[cards.length - 1] + " " + cards[cards.length - 2]

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent = message
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    rendergame()
  }
}
//always return number 5
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13 + 1)
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}




