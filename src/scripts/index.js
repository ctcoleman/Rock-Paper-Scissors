// strings to be dispalyed when win/loose/error
const looserString = "Looser! Try again!"
const winnerString = "Winner! Wanna do it again?"
const choicesArray = ["Rock", "Paper", "Scissors"]
const choicesContainer = document.querySelector(".playButtonsContainer")
const startButton = document.getElementById("startButton")

/*
 * function to create button based on choice given with a class and id
 */
const createChoiceButton = choice => {
  let newButton = document.createElement('button')

  newButton.textContent = `${choice}`
  newButton.setAttribute("class", "choiceButton")
  newButton.setAttribute("id", `${choice}Button`)

  return newButton
}

/*
* function that performs the rock paper scissors based on random computer choice
*/
const rockPaperScissors = ((userChoice) => {
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
    if (userEntery === computerEntery) {
      return alert("Tie! Try Again!")
    } 
    if (userEntery === "Rock" && computerEntery === "Scissors") {
      return alert(winnerString)
    }
    if (userEntery === "rock" && computerEntery === "paper") {
      return alert(looserString)
    }
    if (userEntery === "paper" && computerEntery === "rock") {
      return alert(winnerString)
    }
    if (userEntery === "paper" && computerEntery === "scissors") {
      return alert(looserString)
    }
    if (userEntery === "scissors" && computerEntery === "paper") {
      return alert(winnerString)
    }
    if (userEntery === "scissors" && computerEntery === "rock") {
      return alert(looserString)
    }if (userEntery === "nuke") { // always win ;)
      return alert(winnerString)
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

/*
 * use the createChoiceButton function to create a button for each choice 
 */
choicesArray.forEach((i) => {
  choicesContainer.appendChild(createChoiceButton(i))
})
let choiceButtonArray = Array.from(document.getElementsByClassName("choiceButton"))

// for each choice button add a click event listener
// when button is pressed perform the rockPaperScissors function
// with the computerChoice as ranodm choice
// and userChoice as the button clicked
choiceButtonArray.forEach(e => {
  e.addEventListener(('click'), (e => {
    rockPaperScissors(e.target.textContent)
  }))
})
