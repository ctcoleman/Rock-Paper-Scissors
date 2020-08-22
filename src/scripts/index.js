// strings to be dispalyed when win/loose/error
const looserString = () => alert("Looser! Try again!")
const winnerString = () => alert("Winner! Wanna do it again?")
const startButton = document.getElementById("startButton")

const rockPaperScissors = (() => {
  // prompt dialog to get the users choice
  const userChoice = (() => prompt("Rock...Paper...Scissors...GO!"))()

  // get random computer choice of rock, paper, or scissors based on percentage
  const computerChoice = (() => {
    const randomChoice = Math.random()
    if (randomChoice < (1/3)) {
      return "Rock"
    } else if (randomChoice > (2/3)) {
      return "Scissors"
    } else {
      return "Paper"
    }
  })()

  // create function to display who is the winner between user prompt choice and random computer choice
  const getWinner = (computerEntery, userEntery) => {
    user = userEntery.toLowerCase()
    computer = computerEntery.toLowerCase()
    if (user === computer) {
      return alert("Tie! Try Again!")
    } 
    if (user === "Rock" && computer === "Scissors") {
      return winnerString()
    }
    if (user === "rock" && computer === "paper") {
      return looserString()
    }
    if (user === "paper" && computer === "rock") {
      return winnerString()
    }
    if (user === "paper" && computer === "scissors") {
      return looserString()
    }
    if (user === "scissors" && computer === "paper") {
      return winnerString()
    }
    if (user === "scissors" && computer === "rock") {
      return looserString()
    }if (user === "nuke") { // always win ;)
      return winnerString()
    } else { // error handling
        return alert("Invalid Entery. Please choose Rock, Paper, or Scissors.")
      }
  }
  // call the getWinner function and pass in the usrchoice and compchoice as parameters
  getWinner(computerChoice, userChoice)
  // log the choices to make sure the program is running correctly
  console.log("userChoice => " + userChoice)
  console.log("computerChoice => " + computerChoice)
})

startButton.addEventListener('click', () => startButton.classList.add(".pressed"))
startButton.addEventListener('click', rockPaperScissors)
